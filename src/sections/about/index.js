import { Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Image from "../../assets/about.png";
const useStyles = makeStyles({
  root: {
    textAlign: "center",
    paddingBottom: "50px",
    "& .container": {
      borderTop: "2px solid  #FF7900",
      padding: "10px 0",
    },
    "& p": {
      fontSize: 18,
      marginBottom: 20,
      textAlign: "left",
    },
    "& img": {
      width: "100%",
    },
  },
  header: {
    fontSize: "24px",
    margin: "20px 0 40px",
    color: "#FF7900",
    textTransform: "uppercase",
  },
});

const Index = () => {
  const classes = useStyles();
  return (
    <section className={classes.root} id="about">
      <Container className="container">
        <Container maxWidth="md">
          <h2 className={classes.header}>About</h2>
          <Grid container spacing={6}>
            <Grid item xs={12} sm={3}>
              <div style={{ width: "90%", margin: "auto" }}>
                <img src={Image} alt="" />
              </div>
            </Grid>
            <Grid item xs={12} sm={9}>
              <p>
                Limited: 1,500 unique, fruity, algorithmically generated Bananas
                - stored with proof of ownership stored on the Solana
                blockchain.
              </p>
              <p>
                We believe in Solana and we believe in NFTs. In the future,
                we'll look at this period as a defining moment in culture and
                technology. History is being made, and we want to be part of it
                in a meaningful way.
              </p>
            </Grid>
          </Grid>
        </Container>
      </Container>
    </section>
  );
};

export default Index;
