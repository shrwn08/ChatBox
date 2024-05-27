import React from 'react'
import {Box} from "@mui/material"
function SideBar() {
  return (
    <Box  width="20rem">
                <Box sx={{
                    display:"flex",
                    alignItems:"center",
                    gap: "20px",
                    width:"14rem",
                    height: "7rem"
    }}>
    
        <Box sx={{
            height : "50px",
            width : "50px",
            backgroundColor:"#eba0ca",
            color:"white",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            borderRadius : "50%",
            fontWeight:700
        }}>
            HN
        </Box>
        <Box>
            Here & Now
            <Box sx={{
                color:"#c9c1c6"
            }}>React</Box>
        </Box>

            </Box>
            <Box sx={{
                display:"flex",
                justifyContent:"space-between"
            }}>
                <Box color="#c9c1c6">Conversations</Box>
                <Box sx={{
                    height:"20px",
                    width:"20px",
                    borderRadius:"50%",
                    border:"2px solid #c9c1c6",
                    display:"flex",
                    justifyContent:"center",
                    alignItems:"center",
                    color:"#c9c1c6",
                    fontWeight:700
                }}>+</Box>
            </Box>
            <Box sx={{
                display:"flex",
                gap:"20px",
                marginTop:"40px",
                alignItems:"center"
            }}>
                <Box sx={{
                    height:"40px",
                    width:"40px",
                    borderRadius:"10px",
                    border:"2px solid #f0ebee",
                    display:"flex",
                    justifyContent:"center",
                    alignItems:"center",
                    backgroundColor:"#f0ebee",
                    fontWeight:700
                }}>#</Box>
                <Box>Delhi Office</Box>
            </Box>

            <Box sx={{
                display:"flex",
                gap:"20px",
                marginTop:"10px",
                alignItems:"center",
                backgroundColor:"#625df0"
            }}>
                <Box sx={{
                    height:"40px",
                    width:"40px",
                    borderRadius:"10px",
                    border:"2px solid #f0ebee",
                    display:"flex",
                    justifyContent:"center",
                    alignItems:"center",
                    backgroundColor:"#7c78f5",
                    fontWeight:700
                }}>#</Box>
                <Box>Instructions</Box>
            </Box>
            <Box sx={{
                display:"flex",
                gap:"20px",
                marginTop:"10px",
                alignItems:"center"
            }}>
                <Box sx={{
                    height:"40px",
                    width:"40px",
                    borderRadius:"10px",
                    border:"2px solid #f0ebee",
                    display:"flex",
                    justifyContent:"center",
                    alignItems:"center",
                    backgroundColor:"#f0ebee",
                    fontWeight:700
                }}>#</Box>
                <Box>Gurugram Office</Box>
            </Box>
    </Box>

  )
}

export default SideBar