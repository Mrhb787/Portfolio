import React from "react";

// MUI Components
import { Stack, Avatar, Typography } from "@mui/material";

// usage
/*
height[0] --> avatar height
height[1] --> image height

width[0] --> avatar width
width[1] --> image width

*/
const CustomListItem = ({ height, width, imgURL, imgALT, primary, secondary, time }) => {
    return (
        <Stack direction="row" spacing={2} sx={{ width: "100%" }} >
            <Avatar sx={{ height: height[0], width: width[0], bgcolor: "whitesmoke" }}>
                <img src={imgURL} alt={imgALT} height={height[1]} width={width[1]} />
            </Avatar>
            <Stack direction="column" sx={{ width: "100%", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                <Stack direction="row" alignItems="center" justifyContent="space-between">
                    <Typography variant="body2" sx={{ fontFamily: "inherit" }}>{primary}</Typography>
                    <Typography variant="body2" sx={{ fontFamily: "inherit" }}>{time}</Typography>
                </Stack>
                <Typography variant="caption">{secondary}</Typography>
            </Stack>
        </Stack>
    );
};

export default CustomListItem;