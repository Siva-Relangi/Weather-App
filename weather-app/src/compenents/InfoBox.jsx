import SevereColdIcon from "@mui/icons-material/SevereCold";
import SunnyIcon from "@mui/icons-material/Sunny";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import "./InfoBox.css";

export default function InfoBox({ info }) {
  let HOT_URL =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq26Ceet-IQ3qPol61VnWG75BpMHUc-SrkGQ&s";
  let COLD_URL =
    "https://as2.ftcdn.net/jpg/01/98/06/21/1000_F_198062180_JrnZ0k3kDGEBtTSNE1MXYZITRTmjJ0GT.jpg";
  let RAIN_URL =
    "https://d2u0ktu8omkpf6.cloudfront.net/c6a0dec3ddd9b38074824b860c4112eef536971f7c110a0f.jpg";
  return (
    <div className="info-box">
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={
              info.humidity > 80
                ? RAIN_URL
                : info.temperature > 20
                ? HOT_URL
                : COLD_URL
            }
            title="Weather Image"
          />

          <CardContent>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              sx={{ display: "flex", alignItems: "center", gap: 1, marginLeft: 12}}
            >
              City: {info.city}
              {info.humidity > 80 ? (
                <ThunderstormIcon />
              ) : info.temperature > 20 ? (
                <SunnyIcon />
              ) : (
                <SevereColdIcon />
              )}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary" }}
              component="span"
            >
              <p>Temperature: {info.temperature} °C</p>
              <p>Min Temperature: {info.temperatureMin} °C</p>
              <p>Max Temperature: {info.temperatureMax} °C</p>
              <p>Humidity: {info.humidity}%</p>
              <p>Feels Like: {info.feelsLike} °C</p>
              <p>Description: {info.description}</p>
              <p>Wind Speed: {info.windSpeed} m/s</p>
              <p>
                The Weather can be described as <i>{info.weather}</i> and feels
                like {info.feelsLike}
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
