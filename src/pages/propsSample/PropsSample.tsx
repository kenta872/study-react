import { PropsSampleChildA, PropsSampleChildB } from "./PropsSampleChild";

const PropsSample = () => {
  const hello = (arg: string) => `Hello ${arg}`;
  return (
    <>
      <h1>PropsSample</h1>
      <PropsSampleChildA title="PropsSampleA" message="this is test messageA" />
      <PropsSampleChildB
        title="PropsSampleB"
        message="this is test messageB"
        fn={hello}
      />
    </>
  );
};

export default PropsSample;
