import React from "react";
import Section from "../component/Layout/Section/Section";
import SectionItem from "../component/Layout/SectionItem/SectionItem";
import ProgressAccordian from "../component/performance/ProgressAccordian/ProgressAccordian";
import ProgressBar from "../component/performance/ProgressBar/ProgressBar";
import ProgressCard from "../component/performance/ProgressCard/ProgressCard";
import ProgressHeader from "../component/performance/ProgressHeader/ProgressHeader";
import "./overview.scss";

const overview = () => {
  const mock = [
    {
      title: "Overall Desktop Performance",
      type: "desktop",
      performance: {
        overall: 78,
        details: [
          {
            name: "accessibility",
            label: "Accessibility Score",
            value: 87,
            bgColor: "#f6808b",
            valueBgColor: "#f56f7a",
          },
          {
            name: "bestPractices",
            label: "Best Practices Score",
            value: 0,
            bgColor: "#659cff",
            valueBgColor: "#5e87fe",
          },
          {
            name: "seo",
            label: "SEO Score",
            value: 100,
            bgColor: "#4d4cac",
            valueBgColor: "#4241a4",
          },
          {
            name: "progressiveWebapp",
            label: "Progressive Web App score",
            value: 100,
            bgColor: "#8c4cac",
            valueBgColor: "#6a36a5",
          },
        ],
      },
      auditResults: [
        {
          title: "Ensure text remains visible during webfont load",
          description: "Ensure text remains visible during webfont load",
        },
        {
          title: "Is not configured for a custom splash screen",
          description: "some description",
        },
      ],
    },
    {
      title: "Overall Desktop Performance",
      type: "desktop",
      performance: {
        overall: 78,
        details: [
          {
            name: "accessibility",
            label: "Accessibility Score",
            value: 87,
            bgColor: "#f6808b",
            valueBgColor: "#f56f7a",
          },
          {
            name: "bestPractices",
            label: "Best Practices Score",
            value: 0,
            bgColor: "#659cff",
            valueBgColor: "#5e87fe",
          },
          {
            name: "seo",
            label: "SEO Score",
            value: 100,
            bgColor: "#4d4cac",
            valueBgColor: "#4241a4",
          },
          {
            name: "progressiveWebapp",
            label: "Progressive Web App score",
            value: 100,
            bgColor: "#8c4cac",
            valueBgColor: "#6a36a5",
          },
        ],
      },
      auditResults: [
        {
          title: "Ensure text remains visible during webfont load",
          description: "Ensure text remains visible during webfont load",
        },
        {
          title: "Is not configured for a custom splash screen",
          description: "some description",
        },
      ],
    },
  ];

  return (
    <Section>
      {mock.map((m, i) => (
        <div style={{ marginBottom: "20px" }}>
          <SectionItem>
            <div className="overview__header">
              <ProgressHeader key={i} title={m.title} />
            </div>
            <div className="overview__progressBar">
              <ProgressBar value={m.performance.overall} />
            </div>
            <div className="overview__progressCard">
              {m.performance.details.map((md, i) => (
                <div className="overview__progressCard__item">
                  <ProgressCard
                    value={md.value}
                    label={md.label}
                    progressValue={md.value}
                    bgColor={md.bgColor}
                    valueBgColor={md.valueBgColor}
                  />
                </div>
              ))}
            </div>
            <ProgressAccordian audit={m.auditResults} />
          </SectionItem>
        </div>
      ))}
    </Section>
  );
};

export default overview;
