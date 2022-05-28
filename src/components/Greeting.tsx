
type greetProps = {
    name: string
    msgCount: number
}

const Greeting = (props: greetProps) => {
  return <h5>{props.name}</h5>;
};

export default Greeting;
