import { NextPage } from "next";
import LandingPage from "../core/content-types/LandingPage/module/LandingPage.module";
import { ax } from "../core/utility/Axios";

const About: NextPage = (data: any) => {
 
  console.log(data)

  return (
    <LandingPage {...data}/>
  );
}



export async function getServerSideProps() {

  let res = await ax.get('/landing-pages/1?populate=deep');
  let pageData = await res.data['data']['attributes'];

  return {
    props: { pageData }
  }
}


export default About




