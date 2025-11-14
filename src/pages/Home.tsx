import { useEffect } from 'react';
import Estate from '../components/estate/Estate';
import EstateType from '../components/estateType/EstateType';
import Main from '../components/main/Main';
import Cookies from 'js-cookie';

const Home = () => {
  // useEffect(()=>{
  //     const token:any = Cookies.get("Authentication")
  //     if(!token) return
  //     const user = JSON.parse(token)
  //     console.log(user.jwtToken);
  //     console.log(user.userId);

  // },[])

  return (
    <>
      <Main />
      <Estate />
      <EstateType />
    </>
  );
};
export default Home;
