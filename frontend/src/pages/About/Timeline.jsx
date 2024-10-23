const TIMELINE_EVENTS = [
  {
    year: "2013",
    description: "Project Announced",
  },
  {
    year: "2014",
    description: "Mohanpura Dam Construction Begins",
  },
  {
    year: "2015",
    description: "Kundalia Dam Construction Begins",
  },
  {
    year: "2017",
    description: "Mohanpura Dam Completed",
  },
  {
    year: "2018",
    descriptions: [
      "Kundalia Dam Completed",
      "Dedicated Project Management Unit Established",
      "Hon'ble PM Inaugurated Mohanpura Dam",
      {
        text: "2018 onwards project commissioned as subparts",
        highlight: true,
      },
    ],
  },
];

const styles = {
  container: {
    minHeight: "100vh",
    // backgroundColor: "#c3f6fd",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "16px",
    borderRadius: "20px",
    marginBottom: "67px",
  },
  content: {
    width: "90%",
    maxWidth: "640px",
    color: "#F4F9E9",
    textAlign: "center",
    padding: "20px",
  },
  title: {
    fontSize: "4.8rem",
    marginBottom: "24px",
    color: "black",
    fontWeight: 700,
  },
  year: {
    fontSize: "2.4rem",
    marginTop: "20px",
    color: "#000000",
    fontWeight: 900,
  },
  description: {
    fontSize: "1.6rem",
    marginBottom: "8px",
    color: "#000000",
  },
  highlighted: {
    color: "#FF851B",
  },
  divider: {
    width: "2px",
    height: "20px",
    backgroundColor: "#86B049",
    margin: "12px auto",
  },
  longDivider: {
    width: "2px",
    height: "40px", // Made longer to match the image
    backgroundColor: "#86B049",
    margin: "24px auto", // Increased margin for better spacing
  },
  statusTitle: {
    fontSize: "3.8rem",
    color: "black",
    marginBottom: "16px",
    fontWeight: 700,
  },
  statusText: {
    fontSize: "1.6rem",
    marginBottom: "8px",
    color: "#FF851B",
    fontWeight: 700,
  },
};

function TimelineDescription({ description }) {
  if (typeof description === "string") {
    return <p style={styles.description}>{description}</p>;
  }

  const descriptionStyle = description.highlight
    ? { ...styles.description, ...styles.highlighted }
    : styles.description;

  return <p style={descriptionStyle}>{description.text}</p>;
}

// Component for rendering timeline events
function TimelineEvent({ event, isLast }) {
  return (
    <div style={{ marginBottom: "16px" }}>
      <h2 style={styles.year}>{event.year}</h2>

      {event.description && (
        <p style={styles.description}>{event.description}</p>
      )}

      {event.descriptions?.map((desc, index) => (
        <TimelineDescription key={index} description={desc} />
      ))}

      {!isLast && <div style={styles.divider} />}
    </div>
  );
}

// Component for current status section
function CurrentStatus() {
  return (
    <div>
      <div style={styles.longDivider} />
      <div style={{ marginTop: "32px" }}>
        <h2 style={styles.statusTitle}>Current Status</h2>
        <p style={styles.statusText}>2,00,000 ha being Irrigated</p>
      </div>
    </div>
  );
}

// Main component
function ProjectTimeline() {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.title}>PROJECT TIMELINE</h1>

        {TIMELINE_EVENTS.map((event, index) => (
          <TimelineEvent
            key={event.year}
            event={event}
            isLast={index === TIMELINE_EVENTS.length - 1}
          />
        ))}

        <CurrentStatus />
      </div>
    </div>
  );
}

export default ProjectTimeline;
