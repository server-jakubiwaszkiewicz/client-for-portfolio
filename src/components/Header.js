import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
function Header() {
    return (
        <header className="bg-opacity-0 sticky top-0 flex flex-row items-start max-w-7xl mx-auto z-20 xl:items-center p-5">
          <motion.div
            initial={{
              
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1.5,
            }}
            className="flex flex-row items-center flex-1 mr-auto justify-start"
          >
            <a href="https://github.com/jakubiwaszkiewicz">
              <GitHubIcon
                className="cursor-pointer mx-2"
                style={{ height: 36, width: 36,  }}
              />
            </a>
            
        </motion.div>
        <motion.div
            initial={{
              
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1.5,
            }}
            className="flex flex-row items-center mx-12"
          >
            <Link to="/">
              <HomeOutlinedIcon style={{ height: 50, width: 50 }} className='cursor-pointer '/>
            </Link>
        </motion.div>
        <motion.div
          initial={{
              opacity: 0,
              scale: 0.5,
          }}
          animate={{
              opacity: 1,
              scale: 1,
          }}
          transition={{
              duration: 1.5,
          }}
            className="flex flex-row items-center flex-1 ml-auto justify-end"
        >
          <a href="https://www.linkedin.com/in/jakub-iwaszkiewicz-635bb4245/">
            <LinkedInIcon
              className="cursor-pointer mx-2"
              style={{ height: 40, width: 40,  }}
            />
          </a>
        </motion.div>
      </header>
    );
}

export default Header;