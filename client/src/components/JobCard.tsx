import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Chip, Avatar } from "@mui/material";
import PersonIcon from "@mui/icons-material/People";
import FactoryIcon from "@mui/icons-material/Factory";
import Stack from "@mui/material/Stack";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { favoriteActions } from "@/store/favoriteSlice";

type Props = {
  [key: string]: any;
};

export const JobCard: React.FC<Props> = ({ job }: Props) => {
  console.log("Object passed was", job);

  const {
    j_id: id,
    j_name: name,
    j_location: location,
    j_company_id: companyId,
    j_description: description,
  } = job;

  const {
    c_name: company,
    c_country: country,
    c_industry: industry,
    c_description: companyDescription,
    c_employees: nrOfEmpoloyees,
  } = job;
  const dispatch = useDispatch();

  function addFavorite() {
    dispatch(favoriteActions.addFavoriteJob(id));
  }

  return (
    <Card
      sx={{
        minWidth: "280px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <CardMedia sx={{ height: 140 }} image="/fruit.png" title="fruit" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography
          variant="body2"
          component="div"
          sx={{ color: "green", marginTop: "-10px", marginBottom: "10px" }}
        >
          {company}
        </Typography>
        <div className="extra-info">
          <Chip
            label={`${industry}`}
            variant="outlined"
            avatar={<FactoryIcon sx={{ scale: "80%" }} />}
          />
          <Chip
            label={`${nrOfEmpoloyees}`}
            avatar={<PersonIcon sx={{ scale: "80%" }} />}
          />
        </div>

        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions sx={{ position: "relative", bottom: "0px" }}>
        <Button
          onClick={() => {
            return addFavorite();
          }}
          size="small"
        >
          Favorite
        </Button>
        <Button size="small">
          <Link href={`jobs/${id}`}>Learn more</Link>
        </Button>
      </CardActions>
    </Card>
  );
};
