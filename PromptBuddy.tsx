// @ts-nocheck
import * as React from "react";
import styles from "./PromptBuddy.module.scss";
import type { IPromptBuddyProps } from "./IPromptBuddyProps";
import {
  Avatar,
  Text,
  makeStyles,
  tokens,
} from "@fluentui/react-components";
import {
  PeopleCommunityRegular,
  LightbulbFilamentRegular,
  SparkleRegular,
  HeartRegular,
} from "@fluentui/react-icons";
import { Input, Button } from "@fluentui/react-components";
import { SearchRegular } from "@fluentui/react-icons";
import {
  Card,
  CardHeader,
  Text,
} from "@fluentui/react-components";
import {
  DocumentRegular,
  GlobeRegular,
  PaintBrushRegular,
  TableRegular,
  FormRegular,
  ArrowRepeatAllRegular,
  NotebookRegular,
  MailRegular,
  SparkleFilled,
} from "@fluentui/react-icons";


const useStyles = makeStyles({
  root: {
    fontFamily: "Segoe UI, system-ui, sans-serif",
    color: tokens.colorNeutralForeground1,
    padding: "16px",
    width: "100%",
    backgroundColor: "#fff",
  },
  container: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gap: "32px",
  },
  section: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  header: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    fontWeight: 600,
    color: '#000000', // darker black
    fontSize: "14px", // slightly smaller
    borderBottom: "1px solid #0078D4",
    paddingBottom: "4px",
  },
  itemRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    fontSize: "12px", // reduced
    color: tokens.colorNeutralForeground2,
  },
  left: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    overflow: "hidden",
  },
  name: {
    fontWeight: 600,
    fontSize: "12px", // reduced name font
  },
  title: {
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
    maxWidth: "200px",
    fontSize: "12px", // reduced prompt title font
  },
  count: {
  display: "flex",
  alignItems: "center", // ✅ ensures vertical alignment
  justifyContent: "flex-end", // ✅ right-align everything
  gap: "4px",
  color: tokens.colorNeutralForeground4,
  fontSize: "12px",
  minWidth: "40px", // ✅ keeps width consistent for all rows
},
toolbar: {
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginTop: "30px",  
  paddingTop: "8px",
  fontSize: "12px !important",
  color: tokens.colorNeutralForeground2,
},

toolbarItem: {
  display: "flex",
  alignItems: "center",
  gap: "6px",
  cursor: "pointer",
  backgroundColor: "#EDF6FF",        // 💠 light grey background (SharePoint tone)
  padding: "6px 6px",              // spacing inside each pill
  borderRadius: "6px",             // rounded corners
  fontSize: "12px !important", // slightly smaller text
  color: tokens.colorNeutralForeground2,
  transition: "all 0.2s ease",
  "&:hover": {
    backgroundColor: "#EDF6FF",     // slightly darker on hover
    color: tokens.colorBrandForegroundLink,
  },
},
searchBar: {
  display: "flex",
  justifyContent: "left",
  marginTop: "20px",
  width: "100%",
},

searchInput: {
  width: "100%",
  maxWidth: "550px",
  fontSize: "14px",
  height: "44px", // ✅ taller input
  borderRadius: "6px",
  backgroundColor: "#fff",
  border: "1px solid #d0d0d0", // ✅ light grey border
  boxShadow: "none !important", // ✅ removes any inner shadow
  outline: "none",  
  paddingRight: "2px !important",
},

goButton: {
  display: "right",
  height: "36px", // ✅ matches taller input
  minWidth: "60px",
  backgroundColor: "#0078D4",
  color: "#fff",
  fontWeight: 600,
  borderRadius: "6px",
  "&:hover": {
    backgroundColor: "#005A9E",
  },
},
cardGrid: {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
  gap: "24px",
  marginTop: "24px",
},

cardWrapper: {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
},

card: {
  position: "relative",
  overflow: "hidden",
  borderRadius: "10px",
  padding: "24px 16px",
  color: "#fff",
  width: "100%",
  textAlign: "left",
  transition: "transform 0.25s ease, box-shadow 0.25s ease",
  cursor: "pointer",

  background: `
    radial-gradient(circle at 30% 40%, rgba(255,255,255,0.25) 0%, transparent 40%),
    radial-gradient(circle at 80% 20%, rgba(255,255,255,0.15) 0%, transparent 35%),
    linear-gradient(135deg, #3B4CCA 0%, #657BEA 60%, #A4C8FF 100%)
  `,
},


cardOverlay: {
  position: "absolute",
  top: "-40px",
  right: "-60px",
  width: "160px",
  height: "160px",
  borderRadius: "50%",
  background: "rgba(255,255,255,0.15)",
  filter: "blur(30px)",
  pointerEvents: "none",
},

cardInner: {
  position: "relative",
  zIndex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",   // ✅ ensures left alignment
  justifyContent: "flex-start",
  gap: "6px",
  textAlign: "left",          // ✅ left aligns text
  paddingLeft: "8px",         // ✅ small left padding for spacing
  // ✅ override Fluent UI card default center alignment
  "& *": {
    textAlign: "left !important",
  },
},


cardIcon: {
  fontSize: "36px",
  color: "#fff",
  marginBottom: "8px",
  alignSelf: "flex-start",
},

cardTitle: {
  fontSize: "15px",
  color: "#fff",
},

cardDesc: {
  fontSize: "12px",
  color: "rgba(255,255,255,0.85)",
},

cardCount: {
  fontSize: "12px",
  marginTop: "8px",
  color: "#333",
  textAlign: "center",
},
pageTitleWrapper: {
  display: "flex",
  alignItems: "center",
  gap: "6px",
  marginBottom: "20px",
  borderBottom: "1px solid #edebe9", // light grey underline like SharePoint section header
  paddingBottom: "8px",
},

pageTitleIcon: {
  color: "#0078D4", // SharePoint blue
  fontSize: "20px", // subtle, not too large
},

pageTitleText: {
  fontSize: "20px",
  fontWeight: 600,
  color: "#323130", // Neutral dark
},


});

export default function PromptBuddy(props: IPromptBuddyProps): JSX.Element {
  const s = useStyles();

  const contributors = [
    { initials: "SR", name: "Stuart Ridout", prompts: 15 },
    { initials: "MJ", name: "Matt Jackson", prompts: 12 },
    { initials: "FW", name: "Freya Wilson", prompts: 10 },
    { initials: "EO", name: "Erik Olsson", prompts: 9 },
    { initials: "KF", name: "Katie Foster", prompts: 8 },
  ];

  const topPrompts = [
    { title: "Create a pre-meeting briefing doc", likes: 122 },
    { title: "Start the day right", likes: 99 },
    { title: "Getting key bullet points", likes: 77 },
    { title: "Ask Copilot to prep people", likes: 66 },
    { title: "Color grading cells", likes: 56 },
  ];

  const newPrompts = [
    { title: "Get daily news of interest", likes: 0 },
    { title: "Generate daily briefing", likes: 1 },
    { title: "Speaker / Attendee Bio", likes: 1 },
    { title: "Get latest email from org", likes: 0 },
    { title: "Identify potential growth", likes: 0 },
  ];
const promptCategories = [
  {
    title: "Copilot (M365)",
    description: "Prompts for Copilot (M365)",
    prompts: 12,
    icon: <DocumentRegular />,
    gradient: "linear-gradient(135deg, #3B4CCA 0%, #657BEA 60%, #A4C8FF 100%)",
  },
  {
    title: "Copilot (web)",
    description: "Prompts for Copilot (web)",
    prompts: 6,
    icon: <GlobeRegular />,
    gradient: "linear-gradient(135deg, #3059D5 0%, #4F86F7 60%, #9BC8FF 100%)",
  },
  {
    title: "Designer",
    description: "Prompts for Designer",
    prompts: 1,
    icon: <PaintBrushRegular />,
    gradient: "linear-gradient(135deg, #C83C3C 0%, #E05D5D 50%, #F3A4A4 100%)",
  },
  {
    title: "Excel",
    description: "Prompts for Excel",
    prompts: 4,
    icon: <TableRegular />,
    gradient: "linear-gradient(135deg, #0A6D3F 0%, #25B76E 60%, #89E9A5 100%)",
  },
  {
    title: "Forms",
    description: "Prompts for Forms",
    prompts: 2,
    icon: <FormRegular />,
    gradient: "linear-gradient(135deg, #447D74 0%, #66AFA3 60%, #9FE3D4 100%)",
  },
  {
    title: "Loop",
    description: "Prompts for Loop",
    prompts: 2,
    icon: <ArrowRepeatAllRegular />,
    gradient: "linear-gradient(135deg, #6C3BF2 0%, #9C70FF 60%, #C9A9FF 100%)",
  },
  {
    title: "OneNote",
    description: "Prompts for OneNote",
    prompts: 2,
    icon: <NotebookRegular />,
    gradient: "linear-gradient(135deg, #7A3FB4 0%, #A86ED8 60%, #D4B4FF 100%)",
  },
  {
    title: "Outlook",
    description: "Prompts for Outlook",
    prompts: 8,
    icon: <MailRegular />,
    gradient: "linear-gradient(135deg, #0078D4 0%, #3CA6FF 60%, #A8E0FF 100%)",
  },
  {
    title: "Power Apps",
    description: "Prompts for Power Apps",
    prompts: 3,
    icon: <PaintBrushRegular />, // you can replace with better suited one if available
    gradient: "linear-gradient(135deg, #742774 0%, #A94BA9 60%, #E6A8E6 100%)",
  },
  {
    title: "Power Automate",
    description: "Prompts for Power Automate",
    prompts: 5,
    icon: <ArrowRepeatAllRegular />,
    gradient: "linear-gradient(135deg, #0078D4 0%, #3CA6FF 60%, #A8E0FF 100%)",
  },
  {
    title: "PowerPoint",
    description: "Prompts for PowerPoint",
    prompts: 4,
    icon: <DocumentRegular />,
    gradient: "linear-gradient(135deg, #C43E1C 0%, #E2613A 60%, #F4A88C 100%)",
  },
  {
    title: "Teams",
    description: "Prompts for Teams",
    prompts: 7,
    icon: <PeopleCommunityRegular />,
    gradient: "linear-gradient(135deg, #4B53BC 0%, #7A84E8 60%, #B9C2FF 100%)",
  },
  {
    title: "Viva",
    description: "Prompts for Viva",
    prompts: 3,
    icon: <SparkleRegular />,
    gradient: "linear-gradient(135deg, #8C1B50 0%, #D64C84 60%, #F7B5D0 100%)",
  },
  {
    title: "Whiteboard",
    description: "Prompts for Whiteboard",
    prompts: 2,
    icon: <GlobeRegular />,
    gradient: "linear-gradient(135deg, #0060DF 0%, #4B8CFF 60%, #A9D2FF 100%)",
  },
];



  return (
    <div className={s.root}>
       {/* Page Title */}
    <div className={s.pageTitleWrapper}>
      <SparkleRegular className={s.pageTitleIcon} />
      <span className={s.pageTitleText}>Prompt Buddy</span>
    </div>
      <div className={s.container}>
        {/* Top Contributors */}
        <div className={s.section}>
          <div className={s.header}>
            <PeopleCommunityRegular /> Top Contributors
          </div>
          {contributors.map((c, i) => (
            <div key={i} className={s.itemRow}>
              <div className={s.left}>
                <Text>{i + 1}.</Text>
                <Avatar name={c.name} size={24} color="neutral" />
                <Text className={s.name}>{c.name}</Text>
              </div>
              <Text className={s.count}>{c.prompts} prompts</Text>
            </div>
          ))}
        </div>

        {/* Top Prompts */}
        <div className={s.section}>
          <div className={s.header}>
            <LightbulbFilamentRegular /> Top Prompts
          </div>
          {topPrompts.map((p, i) => (
            <div key={i} className={s.itemRow}>
              <div className={s.left}>
                <Text>{i + 1}.</Text>
                <Avatar
                  icon={<LightbulbFilamentRegular />}
                  size={24}
                  color="neutral"
                />
                <Text className={s.title}>{p.title}</Text>
              </div>
              <div className={s.count}>
                <HeartRegular /> {p.likes}
              </div>
            </div>
          ))}
        </div>

        {/* New Prompts */}
        <div className={s.section}>
          <div className={s.header}>
            <SparkleRegular /> New Prompts
          </div>
          {newPrompts.map((p, i) => (
            <div key={i} className={s.itemRow}>
              <div className={s.left}>
                <Text>{i + 1}.</Text>
                <Avatar icon={<SparkleRegular />} size={24} color="neutral" />
                <Text className={s.title}>{p.title}</Text>
              </div>
              <div className={s.count}>
                <HeartRegular /> {p.likes}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Toolbar Section */}
<div className={s.toolbar}>
  <div className={s.toolbarItem}>
    <HeartRegular style={{ fontSize: "14px" }} /> <span style={{ fontWeight: 600 }}>My Likes</span>
  </div>
  <div className={s.toolbarItem}>
    <span style={{ fontWeight: 600 }}>My Prompts</span>
  </div>
  <div className={s.toolbarItem}>
    <span style={{ fontWeight: 600 }}>My Teams Prompts</span>
  </div>
  <div className={s.toolbarItem}>
    <span style={{ fontWeight: 600 }}>App</span>
  </div>
  <div className={s.toolbarItem}>
    <span style={{ fontWeight: 600 }}>Department</span>
  </div>
  <div className={s.toolbarItem}>
    <span style={{ fontWeight: 600 }}>Persona</span>
  </div>
</div>
{/* Search Section */}
{/* Search Section */}
<div className={s.searchBar}>
  <Input
    contentBefore={<SearchRegular />}
    contentAfter={
      <Button appearance="primary" size="medium" className={s.goButton}>
        Go
      </Button>
    }
    placeholder="Search prompt titles and descriptions"
    appearance="outline"
    className={s.searchInput}
  />
</div>
<div className={s.cardGrid}>
  {promptCategories.map((c, i) => (
    <div key={i} className={s.cardWrapper}>
      <Card className={s.card} style={{ background: c.gradient }}>
        <div className={s.cardOverlay}></div>

        <div className={s.cardInner}>
          <div className={s.cardIcon}>{c.icon}</div>
          <Text weight="semibold" className={s.cardTitle}>
            {c.title}
          </Text>
          <Text className={s.cardDesc}>{c.description}</Text>
        </div>
      </Card>

      <Text className={s.cardCount}>{c.prompts} prompts</Text>
    </div>
  ))}
</div>




    </div>
  );
}
