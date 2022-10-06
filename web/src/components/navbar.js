import React, { useContext } from "react";
import { SnipcartContext } from "gatsby-plugin-snipcart-advanced/context";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Link } from "gatsby";

const ImgCon = styled(GatsbyImage)`
  max-height: 100%;
  max-width: 100%;


  @media only screen and (min-width: 600px) {
 
    max-width: 20%;

} 

`;


const CartSummary = styled.div`
max-width: 100%;
margin-bottom:5px;
margin-left: 58%;
@media only screen and (min-width: 450px) {
  margin-left: 0px;


} 

`;

const CartText = styled.p`
  
 
  font-size: 14px;



`;

const Links = styled(Link)`
  text-decoration: none;

 
 `;

const HomeLink = styled(Link)`
width: 60px;
padding-left: 20px;
`
const drawerWidth = 240;



function Navbar(props) {
  const data = useStaticQuery(graphql`
    {
      sanityHeader {
        logo {
          altText
          image {
            asset {
              gatsbyImageData
            }
          }
        }
        links {
          linkText
          link
        }
      }
    }
  `);

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} >

      <List>
        
      <ImgCon
                  image={data.sanityHeader.logo.image.asset.gatsbyImageData}
                  alt={data.sanityHeader.logo.altText}
                  style={{marginLeft: '100px'}}
                />
      <Box sx={{ my: 5 }}>
      
    </Box>
      <Divider />

      
      
      {data.sanityHeader.links.map((link, i) => {
              return (
                <Links to={link.link} key={i}>
                  <ListItem sx={{ color: "#000" }}>{link.linkText}</ListItem>
                </Links>
              );
            })}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  const { state } = useContext(SnipcartContext);
  const { cartQuantity } = state;
  return (
    <Box sx={{ display: "flex"}}>
      <AppBar component="nav">
        <Toolbar sx={{ background: "#dcc9a4" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />

            <Typography
              component="div"
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <HomeLink to="/">
                <ImgCon
                  image={data.sanityHeader.logo.image.asset.gatsbyImageData}
                  alt={data.sanityHeader.logo.altText}
                />
              </HomeLink>
            </Typography>
          </IconButton>
          <div>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              <HomeLink to="/">
                <ImgCon
                  image={data.sanityHeader.logo.image.asset.gatsbyImageData}
                  alt={data.sanityHeader.logo.altText}
                />
              </HomeLink>
            </Typography>
          </div>

          <Box sx={{ flexGrow: 3, display: { xs: "none", sm: "flex" },
        paddingRight:{sm: "0px" } }}>
            {data.sanityHeader.links.map((link, i) => {
              return (
                <Links to={link.link} key={i}>
                  <Button sx={{ color: "#000",  display: "flex", width: "180px"}}>{link.linkText}</Button>
                </Links>
              );
            })}
          </Box>

          <CartSummary className="snipcart-summary">
            <Link to="/" className="snipcart-checkout cart">
              <IconButton
                color="inherit"
                aria-label="add to shopping cart"
                sx={{ color: "#000", display: "flex", justifyItems: "center"  }}
              >
                <AddShoppingCartIcon />
              </IconButton>{" "}
            </Link>
            <CartText>{cartQuantity ? cartQuantity : ""}</CartText>
          </CartSummary>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
            color: "#000",
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}

export default Navbar;
