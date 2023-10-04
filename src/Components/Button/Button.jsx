const Button = ({ text, onclick }) => {
  return <button style={
{
    backgroundColor:text=="Login"?"#FFBC00":"#25A449",
    color:text=="Signup"?"black":"white",
    width:"80px",
    height:"35px",
    borderRadius:"8px",
    fontSize:"12px",
    fontWeight:"500",
    border:"none"

}}
  onclick={onclick}>{text}
  </button>;
};

export default Button;
