import React from "react";
import { Grid, Typography, useMediaQuery,Card,CardMedia, Modal, Button, Box} from "@mui/material";

const style = {
  position: 'absolute' ,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#212529',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export const PartnerComp = () => {
  const mediumScreen = useMediaQuery("(min-width:600px)"); // width > 600
  const largeScreen = useMediaQuery("(min-width:1024px)");
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
    <Grid container direction="column" spacing={2}  sx={{flexGrow: 15, display: "flex", width: "100%"}} alignContent="center" bgcolor="#212529">
        <Grid item>
            <Typography variant="h2" sx={{ fontWeight: 650, color: "white"}} align="center">Knowledge Partner</Typography>
            <Grid container margin="20px" spacing={10} justifyContent="space-evenly">
                <Grid item >     
                    <Card>
                        <Button onClick={handleOpen}>
                            <CardMedia component="img" image="https://www.e-peristeri.gr/uploads/clients/2017/02/06/mpomat_logo-250x250.jpg"/>
                        </Button>    
                        <Modal open={open} onClose={handleClose}>
                            <Box sx={style}>
                                <Typography variant="h2" sx={{ fontWeight: 650, color: "white"}} align="center">Text in a modal</Typography>
                            </Box>
                        </Modal>

                        
                    </Card>
                </Grid>
            </Grid>
        </Grid>
        <Grid item>
            <Typography variant="h2" sx={{ fontWeight: 650, color: "white"}}  align="center">Platinum Sponsors</Typography>
            <Grid container margin="20px" spacing={10} justifyContent="space-evenly"> 
                <Grid item>
                    <Card>
                        <Button onClick={handleOpen}>
                            <CardMedia component="img" image="https://www.practicalecommerce.com/wp-content/uploads/images/0004/5643/apple_lightbox.png" />
                        </Button>
                        <Modal open={open} onClose={handleClose}>
                            <Box sx={style}>
                                <Typography variant="h2" sx={{ fontWeight: 650, color: "white"}} align="center">Text in a modal</Typography>
                            </Box>
                        </Modal>
                    </Card>
                </Grid>
                <Grid item>       
                   <Card>
                        <Button onClick={handleOpen}>
                            <CardMedia component="img" image="https://upload.wikimedia.org/wikipedia/commons/6/68/Logo_250x250.png" />
                        </Button>
                        <Modal open={open} onClose={handleClose}>
                            <Box sx={style}>
                                <Typography variant="h2" sx={{ fontWeight: 650, color: "white"}} align="center">Text in a modal</Typography>
                            </Box>
                        </Modal>
                    </Card> 
                </Grid>
                <Grid item>
                    <Card>
                        <Button onClick={handleOpen}>
                            <CardMedia component="img" image="https://www.motolouis.gr/image/cache/product%20images/MOTO%20CATALOG/LOGO/piaggio-logo-250x250.jpg" />
                        </Button>
                        <Modal open={open} onClose={handleClose}>
                            <Box sx={style}>
                                <Typography variant="h2" sx={{ fontWeight: 650, color: "white"}} align="center">Text in a modal</Typography>
                            </Box>
                        </Modal>
                    </Card>
                </Grid>

            </Grid>
        </Grid>
        <Grid item>
            <Typography variant="h2" sx={{ fontWeight: 650, color: "white"}} align="center">Grand Sponsors</Typography>
            <Grid container margin="20px" spacing={10} justifyContent="space-evenly"> 
                <Grid item>
                    <Card>
                        <Button onClick={handleOpen}>
                            <CardMedia component="img" sx={{maxHeight:200 , maxWidth: 200}} image="https://upload.wikimedia.org/wikipedia/commons/d/d2/Logo_velcro-250x250.jpg" />
                        </Button>
                        <Modal open={open} onClose={handleClose}>
                            <Box sx={style}>
                                <Typography variant="h2" sx={{ fontWeight: 650, color: "white"}} align="center">Text in a modal</Typography>
                            </Box>
                        </Modal>
                    </Card>
                </Grid>
                <Grid item>       
                   <Card>
                        <Button onClick={handleOpen}>
                            <CardMedia component="img" sx={{maxHeight:200 , maxWidth: 200}} image="https://i.pinimg.com/474x/d2/8b/ee/d28bee92037d0a1aec9bba93e5443c42.jpg" />
                        </Button>
                        <Modal open={open} onClose={handleClose}>
                            <Box sx={style}>
                                <Typography variant="h2" sx={{ fontWeight: 650, color: "white"}} align="center">Text in a modal</Typography>
                            </Box>
                        </Modal>
                    </Card> 
                </Grid>
                <Grid item>
                    <Card>
                        <Button onClick={handleOpen}>
                            <CardMedia component="img" sx={{maxHeight:200 , maxWidth: 200}}image="https://upload.wikimedia.org/wikipedia/commons/b/b8/Logo_250x250.jpg" />
                        </Button>
                        <Modal open={open} onClose={handleClose}>
                            <Box sx={style}>
                                <Typography variant="h2" sx={{ fontWeight: 650, color: "white"}} align="center">Text in a modal</Typography>
                            </Box>
                        </Modal>
                    </Card>
                </Grid>
            </Grid>
        </Grid>
        <Grid item xs={12}>
            <Typography variant="h2" sx={{ fontWeight: 650, color: "white"}} align="center">Partners</Typography>
            <Grid container margin="20px" spacing={5} justifyContent="space-around"> 
                <Grid item>
                    <Card>
                        <Button onClick={handleOpen}>
                            <CardMedia component="img" sx={{maxHeight:150 , maxWidth: 150}} image="https://upload.wikimedia.org/wikipedia/commons/7/77/Eydap_logo_250.jpg" />
                        </Button>
                        <Modal open={open} onClose={handleClose}>
                            <Box sx={style}>
                                <Typography variant="h2" sx={{ fontWeight: 650, color: "white"}} align="center">Text in a modal</Typography>
                            </Box>
                        </Modal>
                    </Card>
                </Grid>
                <Grid item>       
                   <Card>
                        <Button onClick={handleOpen}>
                            <CardMedia component="img" sx={{maxHeight:150 , maxWidth: 150}} image="https://123stamp.gr/image/cache/catalog/Stickers/Cars/Audi/Audi-logo/Audi-Logo-2/Audi_logo-2-250x250.png" />
                        </Button>
                        <Modal open={open} onClose={handleClose}>
                            <Box sx={style}>
                                <Typography variant="h2" sx={{ fontWeight: 650, color: "white"}} align="center">Text in a modal</Typography>
                            </Box>
                        </Modal>
                    </Card> 
                </Grid>
                <Grid item>
                    <Card>
                        <Button onClick={handleOpen}>
                            <CardMedia component="img" sx={{maxHeight:150 , maxWidth: 150}}image="https://kyparissiabeachhotel.gr/wp-content/uploads/2022/10/Chargespot-Logo-250x250-B.png" />
                        </Button>
                        <Modal open={open} onClose={handleClose}>
                            <Box sx={style}>
                                <Typography variant="h2" sx={{ fontWeight: 650, color: "white"}} align="center">Text in a modal</Typography>
                            </Box>
                        </Modal>
                    </Card>
                </Grid>
                <Grid item>
                    <Card>
                        <Button onClick={handleOpen}>
                            <CardMedia component="img" sx={{maxHeight:150 , maxWidth: 150}}image="https://kyparissiabeachhotel.gr/wp-content/uploads/2022/10/Chargespot-Logo-250x250-B.png" />
                        </Button>
                        <Modal open={open} onClose={handleClose}>
                            <Box sx={style}>
                                <Typography variant="h2" sx={{ fontWeight: 650, color: "white"}} align="center">Text in a modal</Typography>
                            </Box>
                        </Modal>
                    </Card>
                </Grid>
                <Grid item>
                    <Card>
                        <Button onClick={handleOpen}>
                            <CardMedia component="img" sx={{maxHeight:150 , maxWidth: 150}}image="https://kyparissiabeachhotel.gr/wp-content/uploads/2022/10/Chargespot-Logo-250x250-B.png" />
                        </Button>
                        <Modal open={open} onClose={handleClose}>
                            <Box sx={style}>
                                <Typography variant="h2" sx={{ fontWeight: 650, color: "white"}} align="center">Text in a modal</Typography>
                            </Box>
                        </Modal>
                    </Card>
                </Grid>
                <Grid item>
                    <Card>
                        <Button onClick={handleOpen}>
                            <CardMedia component="img" sx={{maxHeight:150 , maxWidth: 150}}image="https://kyparissiabeachhotel.gr/wp-content/uploads/2022/10/Chargespot-Logo-250x250-B.png" />
                        </Button>
                        <Modal open={open} onClose={handleClose}>
                            <Box sx={style}>
                                <Typography variant="h2" sx={{ fontWeight: 650, color: "white"}} align="center">Text in a modal</Typography>
                            </Box>
                        </Modal>
                    </Card>
                </Grid>
                <Grid item>
                    <Card>
                        <Button onClick={handleOpen}>
                            <CardMedia component="img" sx={{maxHeight:150 , maxWidth: 150}}image="https://kyparissiabeachhotel.gr/wp-content/uploads/2022/10/Chargespot-Logo-250x250-B.png" />
                        </Button>
                        <Modal open={open} onClose={handleClose}>
                            <Box sx={style}>
                                <Typography variant="h2" sx={{ fontWeight: 650, color: "white"}} align="center">Text in a modal</Typography>
                            </Box>
                        </Modal>
                    </Card>
                </Grid>
                <Grid item>
                    <Card>
                        <Button onClick={handleOpen}>
                            <CardMedia component="img" sx={{maxHeight:150 , maxWidth: 150}}image="https://kyparissiabeachhotel.gr/wp-content/uploads/2022/10/Chargespot-Logo-250x250-B.png" />
                        </Button>
                        <Modal open={open} onClose={handleClose}>
                            <Box sx={style}>
                                <Typography variant="h2" sx={{ fontWeight: 650, color: "white"}} align="center">Text in a modal</Typography>
                            </Box>
                        </Modal>
                    </Card>
                </Grid>
                <Grid item>
                    <Card>
                        <Button onClick={handleOpen}>
                            <CardMedia component="img" sx={{maxHeight:150 , maxWidth: 150}}image="https://kyparissiabeachhotel.gr/wp-content/uploads/2022/10/Chargespot-Logo-250x250-B.png" />
                        </Button>
                        <Modal open={open} onClose={handleClose}>
                            <Box sx={style}>
                                <Typography variant="h2" sx={{ fontWeight: 650, color: "white"}} align="center">Text in a modal</Typography>
                            </Box>
                        </Modal>
                    </Card>
                </Grid>
                <Grid item>
                    <Card>
                        <Button onClick={handleOpen}>
                            <CardMedia component="img" sx={{maxHeight:150 , maxWidth: 150}}image="https://kyparissiabeachhotel.gr/wp-content/uploads/2022/10/Chargespot-Logo-250x250-B.png" />
                        </Button>
                        <Modal open={open} onClose={handleClose}>
                            <Box sx={style}>
                                <Typography variant="h2" sx={{ fontWeight: 650, color: "white"}} align="center">Text in a modal</Typography>
                            </Box>
                        </Modal>
                    </Card>
                </Grid>
            </Grid>
        </Grid>
        <Grid item>
            <Typography variant="h2" sx={{ fontWeight: 650, color: "white"}} align="center">Supporters</Typography>
        </Grid>
    </Grid>
    </>
  );
};
