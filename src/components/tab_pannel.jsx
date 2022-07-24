import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './../styles/home_styles.css'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
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

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: '[#0a192f]', display: 'flex', height: 'auto' }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
        textColor='[#8892b0]'
        indicatorColor='primary'
      >
        
        <Tab  label="Kainovation" {...a11yProps(0)} />
        <Tab label="EchonLabs" {...a11yProps(1)} />
        <Tab label="Freelance" {...a11yProps(2)} />
        {/* <Tab label="Item Four" {...a11yProps(3)} />
        <Tab label="Item Five" {...a11yProps(4)} />
        <Tab label="Item Six" {...a11yProps(5)} />
        <Tab label="Item Seven" {...a11yProps(6)} /> */}
      </Tabs>
      <TabPanel value={value} index={0}>
        <div>
            <h3>
                Junior Machine Learning Engineer   <span className="welcome_text"> @ Kainovation Technologies</span>
            </h3>
            <p className='job-date'>
                October 2021 - Present
            </p>
            <ul className='list-style'>
                <li><span className='job-dis'>Design, Tested and Deployed Machine Learning models to various applications mostly used in Finance sector and Medical sector.</span></li>
                <li><span className='job-dis'>Developed 6 POCs and prototypes to impress the clients (US based) to get the projects for the company.</span></li>
                <li><span className='job-dis'>Developed and deployed edge applications which used in Embedded systems using TensorflowJS and C++.</span></li>
                <li><span className='job-dis'>Developed data pipelines using socket programming and Kafka servers to optimize the the data transmission.</span></li>
            </ul>

        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div>
            <h3>
               Trainee Artificial Intelligence Engineer   <span className="welcome_text"> @ Echonlabs Pvt. Ltd.</span>
            </h3>
            <p className='job-date'>
                May 2021 - May 2022
            </p>
            <ul className='list-style'>
                <li><span className='job-dis'>Developed models to extract information through NIC's to power up eKYC concepts in Finance Companies.</span></li>
                <li><span className='job-dis'>Design, Tested and Deployed Artificial Intelligence models to the product AI-CORE which helps in Finance sector.</span></li>
                <li><span className='job-dis'>Developed various production level machine learning models to power up company software solutions with AI</span></li>
                <li><span className='job-dis'>Contributed to the research paper which is published by company, "A Review on ID Card Verification using Artificial Intelligence"</span></li>
            </ul>


        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div>
            <h3>
                Freelance Machine Learning Engineer   <span className="welcome_text"> @ Fiverr</span>
            </h3>
            <p className='job-date'>
                April 2022 - Present
            </p>
            <ul className='list-style'>
                <li><span className='job-dis'>Design, Tested and Deployed Artificial Intelligence models to various clients from world wide</span></li>
                <li><span className='job-dis'>Developed various production level software solutions powered with AI</span></li>
                <li><span className='job-dis'>Maintain 5 Star ratings...</span></li>
            </ul>

        </div>
      </TabPanel>
      {/* <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel> */}
    </Box>
  );
}
