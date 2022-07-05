import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import CircleIcon from "@mui/icons-material/Circle";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `none`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={
      <ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem", color: "white" }} />
    }
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: "#1c2b36",
  color: "white",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

const SubAccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<CircleIcon sx={{ fontSize: "0.9rem", fill: "#fcc105" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: "#f8f8f8",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const SubAccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: "#fff5d5",
}));

const ProgressAccordian = ({ audit }) => {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        disableGutters
        elevation={0}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Audit results requiring attention:</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {audit.map((a, i) => (
            <div style={{ marginBottom: 20 }}>
              <Accordion>
                <SubAccordionSummary
                  aria-controls="panel1d-content"
                  id="panel1d-header"
                >
                  <Typography>{a.title}</Typography>
                </SubAccordionSummary>
                <SubAccordionDetails>{a.description}</SubAccordionDetails>
              </Accordion>
            </div>
          ))}
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default ProgressAccordian;
