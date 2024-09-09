# 概要
React 学習用のリポジトリです。

# 技術構成
- React
- TypeScript
- Vite

# React基礎知識
## Fragment

- return する際、1つのタグで囲われている必要があり、不必要にdivタグで囲みたくない場合に利用する
```js
import React from "react" 

<React.Fragment>
  <h1>TESTA</h1>
</React.Fragment>
```
```js
import Fragment from "react" 

<Fragment>
  <h1>TESTB</h1>
</Fragment>
```
```js
<>
  <h1>TESTC</h1>
</>
```

## props
- props は一方通行
- 読み取り専用

## EventTriger
- onChange, onMouseEventなどに関数を設定することで関数を紐づけることができる

## state
- ローカルステート
  - useState
    - 値の更新を検知する
    - 更新対象となった値が更新されたタイミングで該当するコンポーネント関数が実行される
    - 即時更新されるわけではなく、レンダリングされるタイミングで繁栄される
    - オブジェクトを更新する際は新しいオブジェクトでないとエラーとなる
    - set関数と値をpropsとして子コンポーネントに渡すことができる
    - 呼ぶ側で更新方法を決めることができる
  - useReducer
    - 定義するタイミングで第一引数に処理を記述する。呼び出したときに引数の処理が実行される
    - 呼ばれる側で更新方法を決めることができる
    - 関数型プログラミングの観点でもuseReducerがおすすめ

- グローバルステート
  - context
    - 使い方
      - createContextで作成
      - useContextで利用
    - Context でデータを保持する
    - propsのバケツリレーが不要になる。
    - 子コンポーネントに親コンポーネントのstateを浸透させたい場合はHogeContext.Providerでコンポーネントを囲い、子コンポーネント側でuseContextで使用可能
    - context用のファイルを別にしておくと管理がしやすい
      - HogeContextの中にcreateContextとuseContextの処理を書く
    - useContextしたコンポーネントはすべて再レンダリングされるので、contextの適用範囲を分けておくのがおすすめ
      - state参照用コンテキストは子コンポーネント全体、更新用コンテキストは特定の子コンポーネントのみに適用など
  - Redux ( 外部ライブラリ )
    - 使い方
      - [Redux toolkit](https://redux-toolkit.js.org/) をインストール
      - configureStore で保存先のStoreを作成
      - reducerをStoreに登録
        - reducer には state と処理を含めて、 Store 側で更新させる
      - createSlice で Store から取得
    - Store にデータを保持する
    - パフォーマンスがよい
    - コードの拡張性がよい
    - 基本的にはReduxを使った管理がよい


## createPortal
- 特定のDOMの子要素としてDOMを入れ込むことができる
- cssなどを応用することでモーダルウィンドウを作成できる

## useRef
- 再レンダリングされても値を保存しておける仕組み
  - refの値を変更しても再レンダリング(ページに反映)されない
  - DOMを格納して操作することができる
    - inputを設定してfocus()でinput要素にフォーカスできる
    - videoを設定してpause(), play()で動画の操作ができる

## forwardRef
- useRefと基本的には同じ
- メソッドのpropsとしてrefを渡す際、useRefだと"ref"という名前で渡すことはできない。forwrdRef((props, ref) => {......})という形でpropsの次の引数に指定することで名前を気にせずに利用することができる

## useImperativeHadle
- refを子コンポーネントに渡すことで親コンポーネント側から子コンポーネントの要素を操作することができる。しかし、子コンポーネント側からすると想定外の操作をされたら困る。この場合にuseImperativeHandleを利用して操作を定めることができる。
- こちらは頻繁に使用するものではない
  - 基本的に子コンポーネントから親コンポーネントにデータを渡すことは管理が大変になるのでなるべく避ける。

## useEffect
- コンポーネント生成時に一度だけ実行したい処理を記述しておく箇所
- 第二引数の依存配列にstateを入れておくと、指定したstateが更新されたときも実行されるようになる
- useEffectの中でreturn を記述しておくと、コンポーネント削除時に処理を実行することができる(finnaly みないなこと)

## useLayoutEffect
- 基本的にはuseEffectと同じ動作
- useEffectよりも先に実行されるところが違う
  - 性格にはレンダリング内容が画面に反映される前に実行される

## スタイリング
- CSSファイル読み込み
  - グローバルに適用されるため、全体に使用するcssに向いている
- インラインスタイル
  - 再利用性が低い
- CSS Module
  - cssファイルをオブジェクトとして読み込み、読み込んだコンポーネント内だけで適用される
  - 将来性が不安なので、使用はおすすめしない
- CSS in JS
  - おすすめ
- よく使うライブラリ
  - [chakra](https://v2.chakra-ui.com/)
  - [マテリアルUI](https://mui.com/)
  - [Bootstrap](https://getbootstrap.jp/)
  - [BULMA](https://bulma.io/)

## 関数型プログラミング思想
- 状態管理と処理を分離
- 純粋関数
  - 特定の入力には特定の出力を返す
- 不変性
  - 一度設定した値は書き換えない
    - 引数の値を変えない
- メリット
  - コードの可読性向上
  - 拡張性・再利用性向上
  - テスト性の向上
  - モジュール化の向上
  - Tree shakingの向上

## 配列
- よく使う処理
  - map
  - filter
- 要素にkeyを付与する
  - 要素の位置によって更新の有無を判断している。keyをつけていたら位置ではなく個別の要素をみて判断することになるため、処理が少なくすることになる
  - indexなどの決められた数値を設定してしまうと、なんらかの数値を紐づいてしまう可能性があるため、固有の値となるようなkeyにする




# やること
- input
- textarea
- radio button
- check box
- multi check box
- pull down
- modal
- 



