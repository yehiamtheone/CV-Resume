import { Document, Page, Text, View, StyleSheet, Link } from '@react-pdf/renderer';
import { details } from '../App';
import React from 'react';

export interface CVSection {
  sections: {
    id: string;
    title: string;
    content: string;
    frameworks?: string[];
    languages?: string[];
  }[];
}


const MyDocument = ({ sections }: CVSection) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Premium Header */}
      <View style={styles.header}>
        <View style={styles.headerAccent} />
        <Text style={styles.name}>{`${details.firstname} ${details.lastname}`}</Text>
        <Text style={styles.tagline}>SOFTWARE ENGINEER</Text>
        <View style={styles.contactContainer}>
          <View style={styles.contactLine} />
          <Text style={styles.contactItem}>{details.phonenumber}</Text>
          <View style={styles.contactDot} />
          <Text style={styles.contactItem}>{details.email}</Text>
          <View style={styles.contactDot} />
          <Link src={details.github} style={styles.link}>
            {details.github?.split('//')[1]}
          </Link>
          <View style={styles.contactLine} />
        </View>
      </View>

      {/* Two-Column Layout */}
      <View style={styles.columns}>
        {/* Left Column */}
        <View style={styles.leftColumn}>
          {/* Profile */}
          <Section title="PROFILE" accentColor="#3498db">
            <Text style={styles.paragraph}>
              Full-stack developer with expertise in Java/Spring and JavaScript/React.
              Passionate about building efficient systems with clean architecture.
              Strong problem-solving skills and attention to detail.
            </Text>
          </Section>

          {/* Skills */}
          <Section title="TECHNICAL SKILLS" accentColor="#3498db">
            <SkillCategory name="Languages" items={['Java', 'TypeScript', 'Python', 'SQL']} />
            <SkillCategory name="Frameworks" items={['Spring Boot', 'React', 'Express','JavaFX']} />
            <SkillCategory name="Tools" items={['Docker', 'Jenkins', 'Git', 'MongoDB']} />
            <SkillCategory name="OS" items={['Linux', 'Shell Scripts', 'Bash', 'Windows', 'Bat']} />
          </Section>
        </View>

        {/* Right Column */}
        <View style={styles.rightColumn}>
          {/* Experience */}
          <Section title="EDUCATION" accentColor="#e74c3c">
            <ExperienceItem 
              title="Computer Science Diploma"
              subtitle="ORT Rehovot"
              period="2025"
            />
          </Section>

          {/* Projects */}
          <Section title="KEY PROJECTS" accentColor="#e74c3c">
            <ExperienceItem 
              title="Dating Application"
              subtitle="Full-stack project"
              details="Express.js, JavaFX, MongoDB"
              link={{txt:"Link to project", src:details.github_dating_app}}
            />
            <ExperienceItem 
              title="CV Platform"
              subtitle="React + TypeScript"
              details="PDF generation, responsive design"
              link={{txt:"Link to project", src:details.github_cv}}
            />

          </Section>
          <Section title='Languages i speak' accentColor='"#e74c3c"'>

              <Text key={1} style={styles.skillItem}>• Hebrew - native</Text>
              <Text key={2} style={styles.skillItem}>• English - nice with it</Text>


          </Section>
        </View>
      </View>

      {/* Watermark Footer */}
      <View style={styles.footer} fixed>
        <Link src={details.REACT_APP_GITHUB_VARCEL} style={{color: 'lightblue'}}>Click for Website version</Link>
        <Text style={styles.footerText}>{details.firstname?.toLowerCase()}{details.lastname?.toLowerCase()}.dev</Text>
      </View>
    </Page>
  </Document>
);

// Reusable Components
const Section = ({ title, children, accentColor = '#3498db' }: { 
  title: string; 
  children: React.ReactNode;
  accentColor?: string;
}) => (
  <View style={styles.section}>
    <View style={[styles.sectionTitleContainer, { borderBottomColor: accentColor }]}>
      <Text style={styles.sectionTitle}>{title}</Text>
    </View>
    <View style={styles.sectionContent}>{children}</View>
  </View>
);

const SkillCategory = ({ name, items }: { name: string; items: string[] }) => (
  <View style={styles.skillCategory}>
    <Text style={styles.skillCategoryTitle}>{name}</Text>
    <View style={styles.skillItems}>
      {items.map((item, i) => (
        <Text key={i} style={styles.skillItem}>• {item}</Text>
      ))}
    </View>
  </View>
);
interface link {
  txt?: string | "";
  src?:string | "";
}
const ExperienceItem = ({ title, subtitle, period, details, link }: { 
  title: string; 
  subtitle: string;
  period?: string;
  details?: string;
  link?: link
  

}) => (
  <View style={styles.experienceItem}>
    <View style={styles.experienceHeader}>
      <Text style={styles.experienceTitle}>{title}</Text>
      {period && <Text style={styles.experiencePeriod}>{period}</Text>}
      {link?.txt && <Link style={styles.experiencePeriod} src={link.src} >{link.txt}</Link>}

    </View>
    <Text style={styles.experienceSubtitle}>{subtitle}</Text>
    {details && <Text style={styles.experienceDetails}>{details}</Text>}
  </View>
  
);

// Stylish Theme
const styles = StyleSheet.create({
  page: {
    padding: 0,
    fontFamily: 'Helvetica',
    backgroundColor: '#ffffff',
    position: 'relative',
  },
  header: {
    padding: 40,
    paddingBottom: 30,
    backgroundColor: '#f8f9fa',
    textAlign: 'center',
    position: 'relative',
  },
  headerAccent: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: 4,
    backgroundColor: '#3498db',
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 5,
    letterSpacing: 1,
  },
  tagline: {
    fontSize: 12,
    color: '#7f8c8d',
    marginBottom: 15,
    letterSpacing: 3,
    fontWeight: 'bold',
  },
  contactContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  contactLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#e0e0e0',
    minWidth: 20,
  },
  contactDot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#bdc3c7',
    marginHorizontal: 10,
  },
  contactItem: {
    fontSize: 10,
    color: '#7f8c8d',
    marginHorizontal: 5,
  },
  link: {
    fontSize: 10,
    color: '#3498db',
    textDecoration: 'none',
    marginHorizontal: 5,
  },
  columns: {
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  leftColumn: {
    width: '50%',
    paddingRight: 15,
    paddingTop: 20,
  },
  rightColumn: {
    width: '50%',
    paddingLeft: 15,
    paddingTop: 20,
    borderLeftWidth: 1,
    borderLeftColor: '#f0f0f0',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitleContainer: {
    borderBottomWidth: 2,
    marginBottom: 12,
    paddingBottom: 3,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#2c3e50',
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  sectionContent: {
    paddingRight: 5,
  },
  paragraph: {
    fontSize: 10,
    lineHeight: 1.5,
    color: '#34495e',
    marginBottom: 10,
    textAlign: 'justify',
  },
  skillCategory: {
    marginBottom: 12,
  },
  skillCategoryTitle: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 5,
  },
  skillItems: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  skillItem: {
    fontSize: 9,
    color: '#34495e',
    marginRight: 10,
    marginBottom: 4,
    width: '45%',
  },
  experienceItem: {
    marginBottom: 15,
  },
  experienceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 3,
  },
  experienceTitle: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  experiencePeriod: {
    fontSize: 9,
    color: '#7f8c8d',
  },
  experienceSubtitle: {
    fontSize: 9,
    color: '#3498db',
    marginBottom: 3,
    fontStyle: 'italic',
  },
  experienceDetails: {
    fontSize: 9,
    color: '#7f8c8d',
    lineHeight: 1.4,
  },
  footer: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    textAlign: 'center',
  },
  footerText: {
    fontSize: 8,
    color: '#bdc3c7',
    letterSpacing: 2,
  },
});

export default MyDocument;