import * as React from "react";
import "./style.css";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Chef from "../../assets/prj/chef.jpg";
import Lions from "../../assets/prj/mylionsgeek.jpg";
import LionsResto from "../../assets/prj/lionsresto.jpg";
import maserati from "../../assets/prj/maserati.jpg";
import Flati from "../../assets/prj/flati.jpg";
import Spatial from "../../assets/prj/spatial.jpg";
import ui1 from "../../assets/prj/uiux/ui1.jpg";
import ui2 from "../../assets/prj/uiux/ui2.jpg";
import ui3 from "../../assets/prj/uiux/ui3.jpg";
import ui4 from "../../assets/prj/uiux/ui4.jpg";
import ui5 from "../../assets/prj/uiux/ui5.jpg";
import ui6 from "../../assets/prj/uiux/ui6.jpg";
import ui7 from "../../assets/prj/uiux/ui7.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const TabsComponent = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", color: "#fff" }} className="text-body-color">
      <Box className="flex justify-center py-[20px]">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          TabIndicatorProps={{
            sx: {
              backgroundColor: "none", // Removes the default background color
              display: "none", // Hides the indicator
            },
          }}
        >
        
          <Tab
            label="UIUX designe"
            {...a11yProps(0)}
            sx={{
              color: "#FDF7E4",
              fontFamily: "Poppins-R",
              "&.Mui-selected": {
                backgroundColor: "",
                color: "#FDF7E4",
                borderBottom: "2px solid #FDF7E4",
              },
            }}
          />
          <Tab
            label="Frontend website"
            {...a11yProps(1)}
            sx={{
              color: "#FDF7E4",
              fontFamily: "Poppins-R",
              "&.Mui-selected": {
                backgroundColor: "",
                color: "#FDF7E4",

                borderBottom: "2px solid #FDF7E4",
              },
            }}
          />
        </Tabs>
      </Box>
  
      <CustomTabPanel
        value={value}
        index={0}
        className="text-body-color w-[100%] backdrop-blur-[10px] bg-[rgba(255,255,255,0.05)]  "
        loading="lazy"
      >
        <>
          <div className="w-[100%] h-[100%] grid grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-[15px] ">
            <div className="w-[100%] ">
              <div className="w-[100%] h-[100%]">
                <img src={ui1} alt="" className="w-[100%] h-[100%]" loading="lazy" />
              </div>
            </div>
            <div className=" w-[100%]">
              <div className="w-[100%]">
                <img src={ui2} alt="" className="w-[100%]" loading="lazy" />
              </div>
            </div>
            <div className=" w-[100%]">
              <div className="w-[100%]">
                <img src={ui3} alt="" className="w-[100%]" loading="lazy" />
              </div>
            </div>
            <div className=" w-[100%]">
              <div className="w-[100%]">
                <img src={ui4} alt="" className="w-[100%]" loading="lazy" />
              </div>
            </div>
            <div className=" w-[100%]">
              <div className="w-[100%]">
                <img src={ui5} alt="" className="w-[100%]" loading="lazy" />
              </div>
            </div>
            <div className=" w-[100%]">
              <div className="w-[100%]">
                <img src={ui6} alt="" className="w-[100%]" loading="lazy" />
              </div>
            </div>
            <div className=" w-[100%]">
              <div className="w-[100%]">
                <img src={ui7} alt="" className="w-[100%]" loading="lazy" />
              </div>
            </div>
          </div>
        </>
      </CustomTabPanel>
      <CustomTabPanel
        value={value}
        index={1}
        className="text-body-color w-[100%] backdrop-blur-[10px] bg-[rgba(255,255,255,0.05)] flex justify-center items-center "
      >
        <>
          <div className="w-[100%] h-[100%] grid grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-[15px]">
            <div className=" w-[100%]">
              <div className="w-[100%]">
                <img src={Chef} alt="" className="w-[100%]" loading="lazy" />
              </div>
              <div className="info w-[100%] bg-dark flex justify-between items-center py-[40px] px-[20px]">
                <h1>Taste</h1>
                <a
                  href=""
                  className="border-[1px] border-body-color py-[5px] px-[10px] "
                >
                  <FontAwesomeIcon icon={faPlay} />{" "}
                  <span className="ms-[10px]">Demo</span>
                </a>
              </div>
            </div>
            <div className=" w-[100%]">
              <div className="w-[100%]">
                <img
                  src={LionsResto}
                  alt=""
                  className="w-[100%]"
                  loading="lazy"
                />
              </div>
              <div className="info w-[100%] bg-dark flex justify-between items-center py-[40px] px-[20px]">
                <h1>LionsResto</h1>
                <a
                  href=""
                  className="border-[1px] border-body-color py-[5px] px-[10px] "
                >
                  <FontAwesomeIcon icon={faPlay} />{" "}
                  <span className="ms-[10px]">Demo</span>
                </a>
              </div>
            </div>
            <div className=" w-[100%]">
              <div className="w-[100%]">
                <img src={Lions} alt="" className="w-[100%]" loading="lazy" />
              </div>
              <div className="info w-[100%] bg-dark flex justify-between items-center py-[40px] px-[20px]">
                <h1>My Lionsgeek</h1>
                    <a
                  href=""
                  className="border-[1px] border-body-color py-[5px] px-[10px] "
                >
                  <FontAwesomeIcon icon={faPlay} />{" "}
                  <span className="ms-[10px]">Demo</span>
                </a>
              </div>
            </div>
            <div className=" w-[100%]">
              <div className="w-[100%]">
                <img
                  src={maserati}
                  alt=""
                  className="w-[100%]"
                  loading="lazy"
                />
              </div>
              <div className="info w-[100%] bg-dark flex justify-between items-center py-[40px] px-[20px]">
                <h1>Maserati</h1>
                    <a
                  href=""
                  className="border-[1px] border-body-color py-[5px] px-[10px] "
                >
                  <FontAwesomeIcon icon={faPlay} />{" "}
                  <span className="ms-[10px]">Demo</span>
                </a>
              </div>
            </div>
            <div className=" w-[100%]">
              <div className="w-[100%]">
                <img src={Spatial} alt="" className="w-[100%]" loading="lazy" />
              </div>
              <div className="info w-[100%] bg-dark flex justify-between items-center py-[40px] px-[20px]">
                <h1>Spatial</h1>
                    <a
                  href=""
                  className="border-[1px] border-body-color py-[5px] px-[10px] "
                >
                  <FontAwesomeIcon icon={faPlay} />{" "}
                  <span className="ms-[10px]">Demo</span>
                </a>
              </div>
            </div>
            <div className=" w-[100%]">
              <div className="w-[100%]">
                <img src={Flati} alt="" className="w-[100%]" loading="lazy" />
              </div>
              <div className="info w-[100%] bg-dark flex justify-between items-center py-[40px] px-[20px]">
                <h1>Flati</h1>
                    <a
                  href=""
                  className="border-[1px] border-body-color py-[5px] px-[10px] "
                >
                  <FontAwesomeIcon icon={faPlay} />{" "}
                  <span className="ms-[10px]">Demo</span>
                </a>
              </div>
            </div>
          </div>
        </>
      </CustomTabPanel>
    </Box>
  );
};
export default TabsComponent;
