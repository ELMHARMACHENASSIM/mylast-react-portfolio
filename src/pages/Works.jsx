import TabsComponent from "../layouts/components/Tabs";
import TitleAbout from "../layouts/components/TitleAbout";
import WorksSvg from "../assets/images/works.svg"
const Works = () =>{
    return (
        <>
<TitleAbout title="Works" />
<section className="relative my-[50px] h-[100%] sm:h-[100%] md:h-[100%] lg:h-[100%] select-none" id="Works">
<div className="md:w-[100%] w-[50%] md:block top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] absolute flex justify-center items-center z-[-1] opacity-[0.5]">
          <img src={WorksSvg} alt="" srcSet="" loading="lazy"/>
        </div>
<div className="myContainer h-[100%] flex justify-center py-[50px]  ">
<TabsComponent/>
</div>
</section>
        </>
    );
};
export default Works;