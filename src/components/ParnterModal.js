


const [open, setOpen] = React.useState(false);
const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false);

<Modal open={open} onClose={handleClose}>
                <Box sx={style}>
                    <Typography variant="h2" sx={{ fontWeight: 650, color: "white"}} align="center">Text in a modal</Typography>
                </Box>
            </Modal>