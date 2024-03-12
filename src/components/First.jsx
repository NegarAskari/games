import Box from '@mui/material/Box'

function First() {

    return (
        <Box sx={{display:'flex', flexDirection:'row', justifyContent:'space-between', width: '90vw', height:'90vh', alignItems:'center'}}>
            <Box sx={{display:'flex', flexDirection:'column', width:'100%', flex:'1'}}>
                left
            </Box>
            <Box sx={{display:'flex', flexDirection:'column', width:'100%', flex:'2'}} class='card'>
                center
            </Box>
            <Box sx={{display:'flex', flexDirection:'column', width:'100%', flex:'1'}}>
                right
            </Box>
        </Box>
    )
}

export default First