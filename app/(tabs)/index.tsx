import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Linking, Image } from 'react-native';

const skills = ['HTML & CSS', 'React', 'JavaScript', "GitHub"];

export default function HomeScreen() {
  
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>

      {/* Hero */}
      <View style={styles.hero}>
        <View style={styles.avatarRing}>
          <Image
            source={require('../../assets/images/Teni.jpeg')}
            style={styles.avatar}
          />
        </View>
        <Text style={styles.name}>Ajagbe Oluwateniolafunmi</Text>
        <Text style={styles.tagline}>Frontend Dev · Mobile Dev in Progress</Text>
        <Text style={styles.school}> Redeemer's University</Text>
      </View>

      {/* About */}
      <View style={styles.section}>
        <Text style={styles.sectionLabel}>ABOUT</Text>
        <Text style={styles.bio}>
          I'm a frontend developer with a growing passion for mobile development.
          Currently studying at Redeemer's University and building things one
          component at a time.
        </Text>
      </View>

      {/* Skills */}
      <View style={styles.section}>
        <Text style={styles.sectionLabel}>SKILLS</Text>
        <View style={styles.skillsGrid}>
          {skills.map((skill) => (
            <View key={skill} style={styles.skillChip}>
              <Text style={styles.skillText}>{skill}</Text>
            </View>
          ))}
        </View>
      </View>

      

      <View style={styles.footer}>
        <Text style={styles.footerText}>Ajagbe Oluwateniolafunmi. 2026</Text>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0a0f',
  },
  hero: {
    alignItems: 'center',
    paddingTop: 80,
    paddingBottom: 48,
    paddingHorizontal: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#1a1a2e',
  },
  avatarRing: {
    width: 110,
    height: 110,
    borderRadius: 55,
    borderWidth: 2,
    borderColor: '#6c63ff',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    overflow: 'hidden',
  },
  avatar: {
    width: 106,
    height: 106,
    borderRadius: 53,
  },
  name: {
    color: '#f0f0ff',
    fontSize: 28,
    fontWeight: '700',
    letterSpacing: 0.5,
    marginBottom: 6,
  },
  tagline: {
    color: '#6c63ff',
    fontSize: 14,
    fontWeight: '500',
    letterSpacing: 0.5,
    marginBottom: 10,
  },
  school: {
    color: '#555570',
    fontSize: 13,
  },
  section: {
    paddingHorizontal: 24,
    paddingVertical: 32,
    borderBottomWidth: 1,
    borderBottomColor: '#1a1a2e',
  },
  sectionLabel: {
    color: '#6c63ff',
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 3,
    marginBottom: 16,
  },
  bio: {
    color: '#a0a0c0',
    fontSize: 15,
    lineHeight: 24,
  },
  skillsGrid: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    gap: 10,
  },
  skillChip: {
    backgroundColor: '#1a1a2e',
    borderWidth: 1,
    borderColor: '#2a2a4e',
    borderRadius: 6,
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
  skillText: {
    color: '#c0c0e0',
    fontSize: 13,
    fontWeight: '500',
  },
  githubBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1a1a2e',
    borderWidth: 1,
    borderColor: '#6c63ff',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 16,
    gap: 12,
  },
  githubIcon: {
    color: '#6c63ff',
    fontSize: 16,
    fontWeight: '700',
  },
  githubBtnText: {
    color: '#f0f0ff',
    fontSize: 15,
    fontWeight: '500',
  },
  footer: {
    alignItems: 'center',
    paddingVertical: 32,
  },
  footerText: {
    color: '#333355',
    fontSize: 12,
    letterSpacing: 1,
  },
});