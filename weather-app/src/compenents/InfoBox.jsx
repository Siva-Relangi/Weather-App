import { motion } from "framer-motion";
import SevereColdIcon from "@mui/icons-material/SevereCold";
import SunnyIcon from "@mui/icons-material/Sunny";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

// import "./InfoBox.css";

export default function InfoBox({ info }) {
  let HOT_URL =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq26Ceet-IQ3qPol61VnWG75BpMHUc-SrkGQ&s";
  let COLD_URL =
    "https://as2.ftmechanisms.net/jpg/01/98/06/21/1000_F_198062180_JrnZ0k3kDGEBtTSNE1MXYZITRTmjJ0GT.jpg";
  let RAIN_URL =
    "https://d2u0ktu8omkpf6.cloudfront.net/c6a0dec3ddd9b38074824b860c4112eef536971f7c110a0f.jpg";

  return (
    <div className="info-box">
      <motion.div
        className="cardContainer"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.02 }}
      >
        <Card
          sx={{
            maxWidth: 345,
            borderRadius: "16px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
            backgroundColor: "rgba(255,255,255,0.9)",
          }}
        >
          <CardMedia
            sx={{ height: 140, borderRadius: "16px 16px 0 0" }}
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
              sx={{ display: "flex", alignItems: "center", gap: 1 }}
              className="text-gray-800 font-bold"
            >
              {info.city}
              {info.humidity > 80 ? (
                <ThunderstormIcon className="text-blue-600" />
              ) : info.temperature > 20 ? (
                <SunnyIcon className="text-yellow-500" />
              ) : (
                <SevereColdIcon className="text-blue-300" />
              )}
            </Typography>
            <Typography
              variant="body2"
              className="text-gray-600"
              component="div"
            >
              <p className="mt-2">Temperature: {info.temperature} °C</p>
              <p>Min Temperature: {info.temperatureMin} °C</p>
              <p>Max Temperature: {info.temperatureMax} °C</p>
              <p>Humidity: {info.humidity}%</p>
              <p>Feels Like: {info.feelsLike} °C</p>
              <p>Description: {info.description}</p>
              <p>Wind Speed: {info.windSpeed} m/s</p>
              <p className="italic mt-2">
                The weather is <span className="font-semibold">{info.weather}</span> and feels
                like {info.feelsLike} °C
              </p>
            </Typography>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}