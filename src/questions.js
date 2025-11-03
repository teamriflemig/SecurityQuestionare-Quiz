
export const QUESTIONS = [
  {
    id: 1,
    question: "Which of the following ensures that a sender cannot deny sending a message?",
    choices: [
      { id: "A", text: "Encryption" },
      { id: "B", text: "Hashing" },
      { id: "C", text: "Digital Signature" },
      { id: "D", text: "Symmetric Key Exchange" }
    ],
    answer: "C",
    explanation: "Digital signatures ensure non-repudiation — proving who sent the data."
  },
  {
    id: 2,
    question: "Which type of threat actor is MOST likely to have the greatest resources and patience for an extended attack?",
    choices: [
      { id: "A", text: "Insider" },
      { id: "B", text: "Nation-State" },
      { id: "C", text: "Script Kiddie" },
      { id: "D", text: "Hacktivist" }
    ],
    answer: "B",
    explanation: "Nation-state actors have the highest resources, skills, and patience for prolonged attacks."
  },
  {
    id: 3,
    question: "What type of attack involves inserting malicious code into a legitimate web application to steal information from users?",
    choices: [
      { id: "A", text: "Phishing" },
      { id: "B", text: "SQL Injection" },
      { id: "C", text: "Cross-Site Scripting (XSS)" },
      { id: "D", text: "DNS Spoofing" }
    ],
    answer: "C",
    explanation: "XSS injects malicious scripts into web apps to steal session cookies, data, etc."
  },
  {
    id: 4,
    question: "A company needs to prevent unauthorized devices from connecting to its internal network. What technology should be used?",
    choices: [
      { id: "A", text: "Firewall" },
      { id: "B", text: "VPN" },
      { id: "C", text: "NAC (Network Access Control)" },
      { id: "D", text: "IDS" }
    ],
    answer: "C",
    explanation: "NAC checks device health and enforces policies before allowing network access."
  },
  {
    id: 5,
    question: "Which backup type saves only the changes made since the last full backup?",
    choices: [
      { id: "A", text: "Incremental" },
      { id: "B", text: "Differential" },
      { id: "C", text: "Full" },
      { id: "D", text: "Snapshot" }
    ],
    answer: "A",
    explanation: "Incremental backup captures only changes since the last full backup."
  },
  {
    id: 6,
    question: "What control type is a biometric fingerprint scanner?",
    choices: [
      { id: "A", text: "Technical" },
      { id: "B", text: "Administrative" },
      { id: "C", text: "Physical" },
      { id: "D", text: "Compensating" }
    ],
    answer: "C",
    explanation: "Biometric scanners are physical controls that authenticate users."
  },
  {
    id: 7,
    question: "Which wireless security protocol is the most secure for corporate environments?",
    choices: [
      { id: "A", text: "WEP" },
      { id: "B", text: "WPA" },
      { id: "C", text: "WPA2-PSK" },
      { id: "D", text: "WPA3-Enterprise" }
    ],
    answer: "D",
    explanation: "WPA3-Enterprise is the most secure option for business wireless networks."
  },
  {
    id: 8,
    question: "Which of the following would BEST help mitigate risks associated with phishing attacks?",
    choices: [
      { id: "A", text: "IDS" },
      { id: "B", text: "Security Awareness Training" },
      { id: "C", text: "Firewall Rules" },
      { id: "D", text: "Password Complexity Requirements" }
    ],
    answer: "B",
    explanation: "Training users helps them recognize phishing attempts and avoid falling victim."
  },
  {
    id: 9,
    question: "Which risk response involves buying cyber insurance?",
    choices: [
      { id: "A", text: "Accept" },
      { id: "B", text: "Mitigate" },
      { id: "C", text: "Transfer" },
      { id: "D", text: "Avoid" }
    ],
    answer: "C",
    explanation: "Buying insurance transfers the financial risk to another party."
  },
  {
    id: 10,
    question: "Which concept is being applied when access to files is based on job roles such as HR, IT, or Accounting?",
    choices: [
      { id: "A", text: "MAC" },
      { id: "B", text: "DAC" },
      { id: "C", text: "RBAC" },
      { id: "D", text: "ABAC" }
    ],
    answer: "C",
    explanation: "Role-Based Access Control (RBAC) assigns permissions based on user job roles."
  },
  {
    id: 11,
    question: "Which term describes an attack where an unauthorized device connects to a corporate wireless network?",
    choices: [
      { id: "A", text: "Rogue AP" },
      { id: "B", text: "Evil Twin" },
      { id: "C", text: "Bluejacking" },
      { id: "D", text: "MAC Spoofing" }
    ],
    answer: "B",
    explanation: "An evil twin is a rogue Wi-Fi access point set up to mimic a legitimate network."
  },
  {
    id: 12,
    question: "What type of malware disguises itself as a legitimate program but delivers a malicious payload?",
    choices: [
      { id: "A", text: "Worm" },
      { id: "B", text: "Ransomware" },
      { id: "C", text: "Trojan" },
      { id: "D", text: "Rootkit" }
    ],
    answer: "C",
    explanation: "A trojan appears legitimate but delivers malicious code once executed."
  },
  {
    id: 13,
    question: "Which process helps ensure that only needed ports and services are running on a server?",
    choices: [
      { id: "A", text: "Network segmentation" },
      { id: "B", text: "Baseline configuration" },
      { id: "C", text: "Change management" },
      { id: "D", text: "Hardening" }
    ],
    answer: "D",
    explanation: "Hardening reduces attack surface by disabling unnecessary services."
  },
  {
    id: 14,
    question: "A database administrator is setting access so that users only have permission to view certain data. Which principle is being applied?",
    choices: [
      { id: "A", text: "Separation of Duties" },
      { id: "B", text: "Need-to-Know" },
      { id: "C", text: "Non-repudiation" },
      { id: "D", text: "Risk Transference" }
    ],
    answer: "B",
    explanation: "Need-to-know restricts data access to only necessary users."
  },
  {
    id: 15,
    question: "Which option BEST describes a warm site in disaster recovery planning?",
    choices: [
      { id: "A", text: "Fully operational copy of the production environment" },
      { id: "B", text: "Facility with basic hardware but not real-time data" },
      { id: "C", text: "Empty building with power and Internet only" },
      { id: "D", text: "Vendor-provided cloud backup solution" }
    ],
    answer: "B",
    explanation: "Warm sites have equipment ready but need configuration and data loading."
  },
  {
    id: 16,
    question: "Which technology would a company use to detect unauthorized changes to critical system files?",
    choices: [
      { id: "A", text: "DLP" },
      { id: "B", text: "File Integrity Monitoring (FIM)" },
      { id: "C", text: "SIEM" },
      { id: "D", text: "HIDS" }
    ],
    answer: "B",
    explanation: "FIM detects unauthorized changes to files."
  },
  {
    id: 17,
    question: "A phishing attack led to a ransomware infection. Which two controls would have BEST prevented the incident? (Choose two.)",
    choices: [
      { id: "A", text: "Data Encryption" },
      { id: "B", text: "Email Filtering" },
      { id: "C", text: "Security Awareness Training" },
      { id: "D", text: "RAID 5" }
    ],
    answer: "B,C",
    explanation: "Filtering blocks phishing emails; training teaches users to recognize them."
  },
  {
    id: 18,
    question: "Which type of access control is enforced by system policies rather than user discretion?",
    choices: [
      { id: "A", text: "DAC" },
      { id: "B", text: "RBAC" },
      { id: "C", text: "ABAC" },
      { id: "D", text: "MAC" }
    ],
    answer: "D",
    explanation: "Mandatory Access Control (MAC) strictly enforces security policies."
  },
  {
    id: 19,
    question: "What is the primary purpose of a honeypot?",
    choices: [
      { id: "A", text: "Encrypt sensitive data" },
      { id: "B", text: "Divert attackers away from real systems" },
      { id: "C", text: "Patch vulnerabilities" },
      { id: "D", text: "Enforce firewall rules" }
    ],
    answer: "B",
    explanation: "Honeypots attract attackers to fake systems to study them."
  },
  {
    id: 20,
    question: "Which incident response phase involves learning lessons and updating the incident response plan after a security event?",
    choices: [
      { id: "A", text: "Detection" },
      { id: "B", text: "Containment" },
      { id: "C", text: "Recovery" },
      { id: "D", text: "Lessons Learned" }
    ],
    answer: "D",
    explanation: "Post-incident analysis improves future responses."
  },
  {
    id: 21,
    question: "Which of the following BEST describes a risk mitigation strategy?",
    choices: [
      { id: "A", text: "Ignoring a low-probability event" },
      { id: "B", text: "Purchasing cyber insurance" },
      { id: "C", text: "Installing a firewall to block threats" },
      { id: "D", text: "Documenting a risk acceptance form" }
    ],
    answer: "C",
    explanation: "Mitigation adds controls to reduce risk likelihood or impact."
  },
  {
    id: 22,
    question: "An attacker is trying multiple passwords against many different user accounts. What is this called?",
    choices: [
      { id: "A", text: "Dictionary Attack" },
      { id: "B", text: "Brute Force Attack" },
      { id: "C", text: "Password Spraying" },
      { id: "D", text: "Rainbow Table Attack" }
    ],
    answer: "C",
    explanation: "Password spraying tries common passwords across many accounts to avoid lockout."
  },
  {
    id: 23,
    question: "What is the purpose of a disaster recovery plan (DRP)?",
    choices: [
      { id: "A", text: "Prevent data breaches" },
      { id: "B", text: "Maintain operations during an attack" },
      { id: "C", text: "Restore critical business systems after disruption" },
      { id: "D", text: "Identify vulnerabilities before attacks occur" }
    ],
    answer: "C",
    explanation: "DRP focuses on system recovery after disaster events."
  },
  {
    id: 24,
    question: "Which concept ensures that sensitive data is only accessible to authorized individuals?",
    choices: [
      { id: "A", text: "Integrity" },
      { id: "B", text: "Confidentiality" },
      { id: "C", text: "Availability" },
      { id: "D", text: "Authentication" }
    ],
    answer: "B",
    explanation: "Confidentiality ensures sensitive data isn't disclosed to unauthorized users."
  },
  {
    id: 25,
    question: "Which of the following BEST describes a vulnerability scanner?",
    choices: [
      { id: "A", text: "Blocks malicious traffic at the network perimeter" },
      { id: "B", text: "Actively exploits vulnerabilities" },
      { id: "C", text: "Passively identifies potential weaknesses" },
      { id: "D", text: "Encrypts sensitive communications" }
    ],
    answer: "C",
    explanation: "Vulnerability scanners find weaknesses but don’t exploit them."
  },
  {
    id: 26,
    question: "Which of the following technologies uses security groups and microsegmentation to enhance cloud security?",
    choices: [
      { id: "A", text: "VPNs" },
      { id: "B", text: "Infrastructure as Code" },
      { id: "C", text: "Cloud-native firewalls" },
      { id: "D", text: "Software-Defined Networking (SDN)" }
    ],
    answer: "D",
    explanation: "SDN uses segmentation and programmable security in cloud environments."
  },
  {
    id: 27,
    question: "A system administrator wants to monitor failed login attempts centrally. Which system should be deployed?",
    choices: [
      { id: "A", text: "SIEM" },
      { id: "B", text: "NAC" },
      { id: "C", text: "DLP" },
      { id: "D", text: "SOAR" }
    ],
    answer: "A",
    explanation: "SIEM collects and analyzes logs, including login failures."
  },
  {
    id: 28,
    question: "Which attack occurs when a malicious actor manipulates a DNS server to redirect traffic to fraudulent websites?",
    choices: [
      { id: "A", text: "DNS Poisoning" },
      { id: "B", text: "Domain Hijacking" },
      { id: "C", text: "IP Spoofing" },
      { id: "D", text: "ARP Poisoning" }
    ],
    answer: "A",
    explanation: "DNS poisoning manipulates DNS to redirect users to malicious sites."
  },
  {
    id: 29,
    question: "A company requires users to authenticate once and then have access to multiple systems without re-entering credentials. Which solution BEST meets this requirement?",
    choices: [
      { id: "A", text: "Federation" },
      { id: "B", text: "LDAP" },
      { id: "C", text: "Multifactor Authentication" },
      { id: "D", text: "VPN" }
    ],
    answer: "A",
    explanation: "Federation allows single authentication across multiple domains or systems."
  },
  {
    id: 30,
    question: "Which backup strategy would provide the QUICKEST recovery time in case of a server failure?",
    choices: [
      { id: "A", text: "Full Backup" },
      { id: "B", text: "Differential Backup" },
      { id: "C", text: "Incremental Backup" },
      { id: "D", text: "Snapshot Backup" }
    ],
    answer: "D",
    explanation: "Snapshots allow rapid rollback to a known good system state."
  },
  {
    id: 31,
    question: "Which principle ensures that users are granted only the access necessary to perform their job functions?",
    choices: [
      { id: "A", text: "Separation of Duties" },
      { id: "B", text: "Need-to-Know" },
      { id: "C", text: "Least Privilege" },
      { id: "D", text: "Role-Based Access Control" }
    ],
    answer: "C",
    explanation: "Least privilege gives users only necessary access rights to do their jobs."
  },
  {
    id: 32,
    question: "An attacker captures data from a public Wi-Fi network without connecting to it. Which attack is being performed?",
    choices: [
      { id: "A", text: "Evil Twin" },
      { id: "B", text: "On-Path Attack (MITM)" },
      { id: "C", text: "Passive Eavesdropping" },
      { id: "D", text: "Session Hijacking" }
    ],
    answer: "C",
    explanation: "Passive eavesdropping listens to network traffic without active interception."
  },
  {
    id: 33,
    question: "What is the PRIMARY goal of a business impact analysis (BIA)?",
    choices: [
      { id: "A", text: "Identify and prioritize critical business functions" },
      { id: "B", text: "Analyze threats against network security" },
      { id: "C", text: "Determine security control effectiveness" },
      { id: "D", text: "Perform a penetration test" }
    ],
    answer: "A",
    explanation: "BIA identifies essential processes and their recovery priorities."
  },
  {
    id: 34,
    question: "What type of backup method would you use if you want to store only the changes made since the last full backup AND you want fast recovery?",
    choices: [
      { id: "A", text: "Incremental" },
      { id: "B", text: "Full" },
      { id: "C", text: "Differential" },
      { id: "D", text: "Snapshot" }
    ],
    answer: "C",
    explanation: "Differential backups capture changes since last full backup and restore faster than incremental."
  },
  {
    id: 35,
    question: "Which of the following technologies BEST protects against on-path (Man-in-the-Middle) attacks?",
    choices: [
      { id: "A", text: "VLAN" },
      { id: "B", text: "IPS" },
      { id: "C", text: "VPN" },
      { id: "D", text: "RAID" }
    ],
    answer: "C",
    explanation: "VPNs encrypt traffic, preventing interception and tampering in on-path attacks."
  },
  {
    id: 36,
    question: "During which incident response phase would you isolate a compromised server?",
    choices: [
      { id: "A", text: "Recovery" },
      { id: "B", text: "Containment" },
      { id: "C", text: "Lessons Learned" },
      { id: "D", text: "Identification" }
    ],
    answer: "B",
    explanation: "Containment limits the spread of the incident, like isolating a server."
  },
  {
    id: 37,
    question: "What security principle is enforced when employees are required to use two different passwords for administrative and non-administrative accounts?",
    choices: [
      { id: "A", text: "Separation of Duties" },
      { id: "B", text: "Least Privilege" },
      { id: "C", text: "Defense in Depth" },
      { id: "D", text: "Dual Control" }
    ],
    answer: "A",
    explanation: "Separating credentials for admin and user accounts supports separation of duties."
  },
  {
    id: 38,
    question: "Which cloud model allows the customer the MOST control over the operating system and applications?",
    choices: [
      { id: "A", text: "SaaS" },
      { id: "B", text: "PaaS" },
      { id: "C", text: "IaaS" },
      { id: "D", text: "FaaS" }
    ],
    answer: "C",
    explanation: "In Infrastructure as a Service (IaaS), the customer manages OS, apps, and configurations."
  },
  {
    id: 39,
    question: "What is a PRIMARY security concern with Infrastructure as Code (IaC)?",
    choices: [
      { id: "A", text: "Outdated server hardware" },
      { id: "B", text: "Rapid spread of misconfigurations" },
      { id: "C", text: "Vendor lock-in" },
      { id: "D", text: "Poor network performance" }
    ],
    answer: "B",
    explanation: "IaC errors can quickly replicate insecure settings across environments."
  },
  {
    id: 40,
    question: "An attacker sends unsolicited Bluetooth messages to nearby devices. What attack is this?",
    choices: [
      { id: "A", text: "Bluesnarfing" },
      { id: "B", text: "Bluebugging" },
      { id: "C", text: "Bluejacking" },
      { id: "D", text: "Bluespoofing" }
    ],
    answer: "C",
    explanation: "Bluejacking involves sending unsolicited Bluetooth messages to devices."
  },
  {
    id: 41,
    question: "Which of the following BEST describes a cold site?",
    choices: [
      { id: "A", text: "Operational data center ready for immediate use" },
      { id: "B", text: "Empty facility with basic infrastructure like power and HVAC" },
      { id: "C", text: "Fully equipped center with real-time data replication" },
      { id: "D", text: "Offsite cloud backup provider" }
    ],
    answer: "B",
    explanation: "A cold site is ready with essentials but needs equipment and data to become operational."
  },
  {
    id: 42,
    question: "Which access control method enforces strict policies based on security labels such as “Confidential” or “Top Secret”?",
    choices: [
      { id: "A", text: "DAC" },
      { id: "B", text: "RBAC" },
      { id: "C", text: "MAC" },
      { id: "D", text: "ABAC" }
    ],
    answer: "C",
    explanation: "Mandatory Access Control uses labels like “Top Secret” to strictly control access."
  },
  {
    id: 43,
    question: "An employee plugs a personal USB drive into a company workstation without approval. What risk does this primarily represent?",
    choices: [
      { id: "A", text: "Insider Threat" },
      { id: "B", text: "Phishing Attack" },
      { id: "C", text: "Supply Chain Attack" },
      { id: "D", text: "Business Email Compromise" }
    ],
    answer: "A",
    explanation: "Unauthorized devices plugged into company systems pose insider risks."
  },
  {
    id: 44,
    question: "Which protocol secures email communication by digitally signing and encrypting messages?",
    choices: [
      { id: "A", text: "TLS" },
      { id: "B", text: "S/MIME" },
      { id: "C", text: "SSH" },
      { id: "D", text: "SSL" }
    ],
    answer: "B",
    explanation: "S/MIME secures email with digital signatures and encryption."
  },
  {
    id: 45,
    question: "Which type of control is implementing a security awareness training program?",
    choices: [
      { id: "A", text: "Physical" },
      { id: "B", text: "Technical" },
      { id: "C", text: "Preventive" },
      { id: "D", text: "Administrative" }
    ],
    answer: "D",
    explanation: "Security training programs are administrative controls (policy/procedure related)."
  },
  {
    id: 46,
    question: "What is the MOST appropriate tool to use when wanting to aggregate, correlate, and analyze logs from multiple systems?",
    choices: [
      { id: "A", text: "VPN" },
      { id: "B", text: "Firewall" },
      { id: "C", text: "SIEM" },
      { id: "D", text: "NAC" }
    ],
    answer: "C",
    explanation: "A SIEM collects and analyzes logs from across the enterprise."
  },
  {
    id: 47,
    question: "Which of the following would MOST help prevent unauthorized physical access to a data center?",
    choices: [
      { id: "A", text: "IDS" },
      { id: "B", text: "Biometric Access Controls" },
      { id: "C", text: "VPN" },
      { id: "D", text: "Anti-Malware" }
    ],
    answer: "B",
    explanation: "Biometrics (like fingerprints) are effective physical security measures."
  },
  {
    id: 48,
    question: "What security concept involves separating services and functions into isolated containers to minimize the attack surface?",
    choices: [
      { id: "A", text: "Microsegmentation" },
      { id: "B", text: "Defense in Depth" },
      { id: "C", text: "Least Privilege" },
      { id: "D", text: "Data Sovereignty" }
    ],
    answer: "A",
    explanation: "Microsegmentation isolates workloads to minimize lateral movement risk."
  },
  {
    id: 49,
    question: "An attacker successfully tricks a user into giving up login credentials via a fake login page. What attack technique was used?",
    choices: [
      { id: "A", text: "Spear Phishing" },
      { id: "B", text: "Vishing" },
      { id: "C", text: "Smishing" },
      { id: "D", text: "Pharming" }
    ],
    answer: "A",
    explanation: "Spear phishing targets individuals with highly customized fake login pages."
  },
  {
    id: 50,
    question: "Which phase of the incident response process involves finding and removing malware from infected systems?",
    choices: [
      { id: "A", text: "Preparation" },
      { id: "B", text: "Containment" },
      { id: "C", text: "Eradication" },
      { id: "D", text: "Lessons Learned" }
    ],
    answer: "C",
    explanation: "Eradication is when you remove malware or vulnerabilities after containment."
  },
  {
    id: 51,
    question: "Which security tool uses signatures and anomaly detection to identify malicious network traffic?",
    choices: [
      { id: "A", text: "Firewall" },
      { id: "B", text: "SIEM" },
      { id: "C", text: "IDS" },
      { id: "D", text: "DLP" }
    ],
    answer: "C",
    explanation: "An IDS detects threats by matching signatures or identifying anomalies."
  },
  {
    id: 52,
    question: "A company wants to ensure that employees can recover their files after a ransomware attack without paying the ransom. Which control BEST achieves this?",
    choices: [
      { id: "A", text: "IDS" },
      { id: "B", text: "Regular Offline Backups" },
      { id: "C", text: "VPN Access" },
      { id: "D", text: "Email Filtering" }
    ],
    answer: "B",
    explanation: "Offline backups protect against ransomware by providing safe recovery data."
  },
  {
    id: 53,
    question: "Which of the following is MOST critical to maintain when preserving digital evidence?",
    choices: [
      { id: "A", text: "Full Disk Encryption" },
      { id: "B", text: "Legal Hold" },
      { id: "C", text: "Chain of Custody" },
      { id: "D", text: "Incident Triage" }
    ],
    answer: "C",
    explanation: "Chain of custody ensures evidence integrity for legal use."
  },
  {
    id: 54,
    question: "A company configures a cloud storage bucket and mistakenly leaves it open to the public. What type of vulnerability is this?",
    choices: [
      { id: "A", text: "Zero-Day" },
      { id: "B", text: "Misconfiguration" },
      { id: "C", text: "Insider Threat" },
      { id: "D", text: "Malware Infection" }
    ],
    answer: "B",
    explanation: "Leaving a cloud bucket public is a classic misconfiguration vulnerability."
  },
  {
    id: 55,
    question: "Which layer of the OSI model does a firewall operate primarily at?",
    choices: [
      { id: "A", text: "Application" },
      { id: "B", text: "Transport" },
      { id: "C", text: "Network" },
      { id: "D", text: "Data Link" }
    ],
    answer: "C",
    explanation: "Firewalls operate mainly at Layer 3 (Network layer) — managing IP addresses and traffic."
  },
  {
    id: 56,
    question: "What security concept is enforced when two employees are required to approve a wire transfer above a certain dollar amount?",
    choices: [
      { id: "A", text: "Dual Control" },
      { id: "B", text: "Least Privilege" },
      { id: "C", text: "Discretionary Access Control" },
      { id: "D", text: "Federation" }
    ],
    answer: "A",
    explanation: "Dual control requires two people to authorize a sensitive action."
  },
  {
    id: 57,
    question: "Which cryptographic concept is used to ensure message integrity?",
    choices: [
      { id: "A", text: "Symmetric Encryption" },
      { id: "B", text: "Asymmetric Encryption" },
      { id: "C", text: "Hashing" },
      { id: "D", text: "Key Exchange" }
    ],
    answer: "C",
    explanation: "Hashing ensures data integrity by generating a fixed fingerprint of data."
  },
  {
    id: 58,
    question: "What is the purpose of tokenization in data security?",
    choices: [
      { id: "A", text: "Encrypt sensitive data" },
      { id: "B", text: "Replace sensitive data with non-sensitive placeholders" },
      { id: "C", text: "Hash sensitive data" },
      { id: "D", text: "Create a secure communication channel" }
    ],
    answer: "B",
    explanation: "Tokenization replaces real data with fake tokens to protect sensitive information."
  },
  {
    id: 59,
    question: "Which type of backup provides the FASTEST full system recovery after a catastrophic failure?",
    choices: [
      { id: "A", text: "Incremental" },
      { id: "B", text: "Full Backup" },
      { id: "C", text: "Differential" },
      { id: "D", text: "Cloud Backup" }
    ],
    answer: "B",
    explanation: "Full backups allow the quickest recovery without relying on incremental data restoration."
  },
  {
    id: 60,
    question: "A team uses a sandbox environment to open suspicious files. What type of control is this?",
    choices: [
      { id: "A", text: "Preventive" },
      { id: "B", text: "Detective" },
      { id: "C", text: "Corrective" },
      { id: "D", text: "Compensating" }
    ],
    answer: "A",
    explanation: "Sandboxes are preventive, isolating suspicious files before damage can occur."
  },
  {
    id: 61,
    question: "Which of the following is a PRIMARY characteristic of a rootkit?",
    choices: [
      { id: "A", text: "Encrypts files and demands ransom" },
      { id: "B", text: "Hides its existence by manipulating the OS" },
      { id: "C", text: "Replicates itself across the network" },
      { id: "D", text: "Sends unsolicited messages via Bluetooth" }
    ],
    answer: "B",
    explanation: "Rootkits hide their presence by modifying OS functions to avoid detection."
  },
  {
    id: 62,
    question: "An organization wants to minimize data loss during a disaster. Which metric defines the maximum amount of data loss acceptable?",
    choices: [
      { id: "A", text: "RTO" },
      { id: "B", text: "MTD" },
      { id: "C", text: "RPO" },
      { id: "D", text: "ALE" }
    ],
    answer: "C",
    explanation: "Recovery Point Objective defines the maximum acceptable data loss."
  },
  {
    id: 63,
    question: "Which wireless security protocol is considered obsolete and should NOT be used?",
    choices: [
      { id: "A", text: "WPA2" },
      { id: "B", text: "WPA" },
      { id: "C", text: "WPA3" },
      { id: "D", text: "WEP" }
    ],
    answer: "D",
    explanation: "WEP is outdated and insecure — easily cracked in minutes."
  },
  {
    id: 64,
    question: "A system administrator is deploying security patches to all systems automatically after testing. This is an example of:",
    choices: [
      { id: "A", text: "Change Management" },
      { id: "B", text: "Patch Management" },
      { id: "C", text: "Hardening" },
      { id: "D", text: "Incident Response" }
    ],
    answer: "B",
    explanation: "Patch management involves scheduling and deploying updates systematically."
  },
  {
    id: 65,
    question: "What type of malware restricts access to a system until payment is made?",
    choices: [
      { id: "A", text: "Trojan" },
      { id: "B", text: "Worm" },
      { id: "C", text: "Spyware" },
      { id: "D", text: "Ransomware" }
    ],
    answer: "D",
    explanation: "Ransomware encrypts systems/files and demands payment for access."
  },
  {
    id: 66,
    question: "Which term describes isolating different departments in a network to improve security?",
    choices: [
      { id: "A", text: "Subnetting" },
      { id: "B", text: "Virtualization" },
      { id: "C", text: "Network Segmentation" },
      { id: "D", text: "Packet Filtering" }
    ],
    answer: "C",
    explanation: "Segmentation isolates different parts of the network for better control and security."
  },
  {
    id: 67,
    question: "What concept does the principle of \"never trust, always verify\" relate to?",
    choices: [
      { id: "A", text: "VPN" },
      { id: "B", text: "Zero Trust" },
      { id: "C", text: "Single Sign-On" },
      { id: "D", text: "Role-Based Access Control" }
    ],
    answer: "B",
    explanation: "Zero Trust always requires verification, regardless of network location."
  },
  {
    id: 68,
    question: "Which tool is specifically designed to discover vulnerabilities in a system but NOT exploit them?",
    choices: [
      { id: "A", text: "Penetration Test" },
      { id: "B", text: "Exploit Framework" },
      { id: "C", text: "Vulnerability Scanner" },
      { id: "D", text: "SIEM" }
    ],
    answer: "C",
    explanation: "Vulnerability scanners detect weaknesses without active exploitation."
  },
  {
    id: 69,
    question: "An employee receives a fake call pretending to be IT support asking for a password. What attack is this?",
    choices: [
      { id: "A", text: "Phishing" },
      { id: "B", text: "Vishing" },
      { id: "C", text: "Smishing" },
      { id: "D", text: "Spear Phishing" }
    ],
    answer: "B",
    explanation: "Vishing is phishing conducted over the telephone."
  },
  {
    id: 70,
    question: "A user logs into an internal website using a badge and PIN. What authentication factors are being used?",
    choices: [
      { id: "A", text: "Something you know and something you are" },
      { id: "B", text: "Something you know and something you have" },
      { id: "C", text: "Something you have and something you are" },
      { id: "D", text: "Two instances of something you know" }
    ],
    answer: "B",
    explanation: "PIN = something you know; Badge = something you have."
  },
  {
    id: 71,
    question: "Which technology allows secure remote access to a corporate network by encrypting all traffic?",
    choices: [
      { id: "A", text: "VLAN" },
      { id: "B", text: "IDS" },
      { id: "C", text: "VPN" },
      { id: "D", text: "Proxy Server" }
    ],
    answer: "C",
    explanation: "A VPN encrypts data between remote users and corporate networks."
  },
  {
    id: 72,
    question: "An employee leaves a confidential document on a shared printer. What kind of risk is this?",
    choices: [
      { id: "A", text: "Insider Threat" },
      { id: "B", text: "Physical Security Risk" },
      { id: "C", text: "Supply Chain Risk" },
      { id: "D", text: "Malware Infection" }
    ],
    answer: "B",
    explanation: "Leaving sensitive documents in shared spaces risks unauthorized access."
  },
  {
    id: 73,
    question: "Which of the following would MOST effectively prevent malware from executing on endpoints?",
    choices: [
      { id: "A", text: "Application Allowlisting" },
      { id: "B", text: "IDS Deployment" },
      { id: "C", text: "SSL/TLS Encryption" },
      { id: "D", text: "Role-Based Access Control" }
    ],
    answer: "A",
    explanation: "Only approved apps can run, blocking unknown malware."
  },
  {
    id: 74,
    question: "A company requires that users verify their identity using a username, password, and fingerprint scan. This is an example of:",
    choices: [
      { id: "A", text: "Multi-Factor Authentication" },
      { id: "B", text: "Federation" },
      { id: "C", text: "SSO" },
      { id: "D", text: "Kerberos Authentication" }
    ],
    answer: "A",
    explanation: "Using two or more different authentication types (password + fingerprint)."
  },
  {
    id: 75,
    question: "Which security principle ensures that critical functions are divided among multiple people to prevent fraud?",
    choices: [
      { id: "A", text: "Least Privilege" },
      { id: "B", text: "Separation of Duties" },
      { id: "C", text: "Job Rotation" },
      { id: "D", text: "Dual Control" }
    ],
    answer: "B",
    explanation: "No one person controls all parts of a critical process, preventing fraud."
  },
  {
    id: 76,
    question: "What technique is used by attackers to overload a server with requests, causing service disruption?",
    choices: [
      { id: "A", text: "SQL Injection" },
      { id: "B", text: "DNS Poisoning" },
      { id: "C", text: "DDoS Attack" },
      { id: "D", text: "ARP Spoofing" }
    ],
    answer: "C",
    explanation: "Distributed Denial of Service floods a server with traffic."
  },
  {
    id: 77,
    question: "Which of the following devices inspects and filters packets based on application-level data?",
    choices: [
      { id: "A", text: "Traditional Firewall" },
      { id: "B", text: "Proxy Server" },
      { id: "C", text: "Next-Generation Firewall (NGFW)" },
      { id: "D", text: "Router" }
    ],
    answer: "C",
    explanation: "NGFWs inspect packets deeply, including application-level data."
  },
  {
    id: 78,
    question: "Which method ensures that a user cannot deny performing an action, such as sending an email?",
    choices: [
      { id: "A", text: "Non-Repudiation" },
      { id: "B", text: "Availability" },
      { id: "C", text: "Encryption" },
      { id: "D", text: "Role-Based Access Control" }
    ],
    answer: "A",
    explanation: "Non-repudiation ensures proof of actions like sending emails."
  },
  {
    id: 79,
    question: "An attacker exploits a race condition in a web application. What is this an example of?",
    choices: [
      { id: "A", text: "Improper Input Handling" },
      { id: "B", text: "Application Logic Flaw" },
      { id: "C", text: "Secure Coding Practice" },
      { id: "D", text: "Race Attack Vulnerability" }
    ],
    answer: "D",
    explanation: "Race conditions exploit timing issues in applications."
  },
  {
    id: 80,
    question: "Which of the following is a benefit of implementing Infrastructure as Code (IaC) securely?",
    choices: [
      { id: "A", text: "Manual configuration of servers" },
      { id: "B", text: "Consistent and repeatable deployments" },
      { id: "C", text: "Physical separation of networks" },
      { id: "D", text: "Encrypted communication tunnels" }
    ],
    answer: "B",
    explanation: "IaC enables secure, automated, consistent infrastructure setup."
  },
  {
    id: 81,
    question: "Which of the following BEST describes the primary benefit of implementing a SIEM system?",
    choices: [
      { id: "A", text: "Blocking unauthorized access attempts" },
      { id: "B", text: "Preventing malware infections" },
      { id: "C", text: "Aggregating and analyzing security logs centrally" },
      { id: "D", text: "Encrypting sensitive data at rest" }
    ],
    answer: "C",
    explanation: "SIEM systems collect logs from multiple sources for centralized analysis."
  },
  {
    id: 82,
    question: "What is the MAIN purpose of a DLP (Data Loss Prevention) system?",
    choices: [
      { id: "A", text: "Detect malware signatures" },
      { id: "B", text: "Monitor unauthorized data transfers" },
      { id: "C", text: "Block phishing emails" },
      { id: "D", text: "Scan networks for vulnerabilities" }
    ],
    answer: "B",
    explanation: "DLP systems prevent sensitive data from leaving the network."
  },
  {
    id: 83,
    question: "An attacker tricks a user into resetting their password by spoofing a legitimate password reset page. What kind of attack is this?",
    choices: [
      { id: "A", text: "Phishing" },
      { id: "B", text: "SQL Injection" },
      { id: "C", text: "Session Hijacking" },
      { id: "D", text: "Privilege Escalation" }
    ],
    answer: "A",
    explanation: "Spoofed password reset pages are classic phishing attacks."
  },
  {
    id: 84,
    question: "Which backup method copies only the files that have changed since the last backup, no matter what type it was?",
    choices: [
      { id: "A", text: "Full" },
      { id: "B", text: "Incremental" },
      { id: "C", text: "Differential" },
      { id: "D", text: "Snapshot" }
    ],
    answer: "B",
    explanation: "Incremental backups save changes since the last backup (full or incremental)."
  },
  {
    id: 85,
    question: "What does the principle of Defense in Depth emphasize?",
    choices: [
      { id: "A", text: "Using multiple layers of security controls" },
      { id: "B", text: "Deploying only firewalls at the network perimeter" },
      { id: "C", text: "Using two-factor authentication for all logins" },
      { id: "D", text: "Relying primarily on SIEM alerts" }
    ],
    answer: "A",
    explanation: "Defense in Depth means no single point of failure."
  },
  {
    id: 86,
    question: "Which of the following is an example of an administrative control?",
    choices: [
      { id: "A", text: "Fire extinguisher in server room" },
      { id: "B", text: "Firewall rules" },
      { id: "C", text: "Security awareness policy" },
      { id: "D", text: "Encryption of data at rest" }
    ],
    answer: "C",
    explanation: "Administrative controls include policies and procedures."
  },
  {
    id: 87,
    question: "A SOC analyst notices large outbound traffic to an unknown IP. What is the BEST immediate action?",
    choices: [
      { id: "A", text: "Shut down all network switches" },
      { id: "B", text: "Disconnect affected systems" },
      { id: "C", text: "Reboot affected systems" },
      { id: "D", text: "Call the ISP" }
    ],
    answer: "B",
    explanation: "Disconnect immediately to prevent further data exfiltration."
  },
  {
    id: 88,
    question: "Which term describes unauthorized commands sent from a user’s browser to a trusted website?",
    choices: [
      { id: "A", text: "Cross-Site Scripting (XSS)" },
      { id: "B", text: "SQL Injection" },
      { id: "C", text: "Command Injection" },
      { id: "D", text: "Cross-Site Request Forgery (CSRF)" }
    ],
    answer: "D",
    explanation: "CSRF tricks users into executing unwanted actions."
  },
  {
    id: 89,
    question: "Which of the following technologies enables a single identity to access multiple applications across different domains?",
    choices: [
      { id: "A", text: "Multifactor Authentication" },
      { id: "B", text: "Federation" },
      { id: "C", text: "VPN" },
      { id: "D", text: "Zero Trust" }
    ],
    answer: "B",
    explanation: "Federation allows single login across multiple organizations/systems."
  },
  {
    id: 90,
    question: "What is the FIRST action to take when you detect an active ransomware infection?",
    choices: [
      { id: "A", text: "Pay the ransom" },
      { id: "B", text: "Disconnect infected systems from the network" },
      { id: "C", text: "Run antivirus scan" },
      { id: "D", text: "Contact cloud backup provider" }
    ],
    answer: "B",
    explanation: "Isolate first to stop the spread of ransomware."
  },
  {
    id: 91,
    question: "Which of the following terms describes preventing unauthorized access by forcing a user to authenticate again after a period of inactivity?",
    choices: [
      { id: "A", text: "Session Lock" },
      { id: "B", text: "Password Complexity" },
      { id: "C", text: "Single Sign-On" },
      { id: "D", text: "Federation" }
    ],
    answer: "A",
    explanation: "Session locks require reauthentication after inactivity to prevent unauthorized access."
  },
  {
    id: 92,
    question: "What type of test involves assessing the physical, administrative, and technical safeguards without exploiting vulnerabilities?",
    choices: [
      { id: "A", text: "Vulnerability Scan" },
      { id: "B", text: "Penetration Test" },
      { id: "C", text: "Risk Assessment" },
      { id: "D", text: "Business Impact Analysis" }
    ],
    answer: "C",
    explanation: "Risk assessments evaluate safeguards without actively exploiting vulnerabilities."
  },
  {
    id: 93,
    question: "Which component is critical for ensuring confidentiality when sending sensitive data across the Internet?",
    choices: [
      { id: "A", text: "Hashing" },
      { id: "B", text: "Encryption" },
      { id: "C", text: "Load Balancing" },
      { id: "D", text: "IDS" }
    ],
    answer: "B",
    explanation: "Encryption protects data confidentiality during transmission."
  },
  {
    id: 94,
    question: "What is the purpose of implementing redundant power supplies in servers?",
    choices: [
      { id: "A", text: "Improve encryption performance" },
      { id: "B", text: "Increase network bandwidth" },
      { id: "C", text: "Enhance system availability" },
      { id: "D", text: "Provide faster processing" }
    ],
    answer: "C",
    explanation: "Redundant power supplies help keep servers running during power failures."
  },
  {
    id: 95,
    question: "Which of the following MOST accurately defines tokenization?",
    choices: [
      { id: "A", text: "Encrypting all data in a database" },
      { id: "B", text: "Replacing sensitive data elements with a unique identifier" },
      { id: "C", text: "Hashing user passwords before storage" },
      { id: "D", text: "Obfuscating source code to protect intellectual property" }
    ],
    answer: "B",
    explanation: "Tokenization swaps real data for safe, meaningless tokens."
  },
  {
    id: 96,
    question: "An attacker uses a vulnerability in a software program that has not yet been patched. What kind of attack is this?",
    choices: [
      { id: "A", text: "Zero-Day" },
      { id: "B", text: "Man-in-the-Middle" },
      { id: "C", text: "Cross-Site Scripting" },
      { id: "D", text: "Phishing" }
    ],
    answer: "A",
    explanation: "Zero-day attacks exploit unknown or unpatched vulnerabilities."
  },
  {
    id: 97,
    question: "What is the BEST method to mitigate the impact of social engineering attacks?",
    choices: [
      { id: "A", text: "Install firewalls" },
      { id: "B", text: "Security Awareness Training" },
      { id: "C", text: "Regular Penetration Testing" },
      { id: "D", text: "Conduct Full Backups" }
    ],
    answer: "B",
    explanation: "Training users helps them recognize and avoid social engineering."
  },
  {
    id: 98,
    question: "Which type of malware is specifically designed to provide persistent, hidden access to a compromised system?",
    choices: [
      { id: "A", text: "Ransomware" },
      { id: "B", text: "Trojan" },
      { id: "C", text: "Rootkit" },
      { id: "D", text: "Worm" }
    ],
    answer: "C",
    explanation: "Rootkits maintain hidden, persistent access by deeply integrating with systems."
  },
  {
    id: 99,
    question: "A backup strategy uses the Grandfather-Father-Son method. What is this primarily designed to achieve?",
    choices: [
      { id: "A", text: "Ensure zero data loss" },
      { id: "B", text: "Maintain multiple historical versions of backups" },
      { id: "C", text: "Accelerate disaster recovery" },
      { id: "D", text: "Improve real-time replication" }
    ],
    answer: "B",
    explanation: "Grandfather-Father-Son rotation ensures backup version history."
  },
  {
    id: 100,
    question: "What security tool intercepts and controls traffic between a user and the Internet to enforce company policies?",
    choices: [
      { id: "A", text: "Firewall" },
      { id: "B", text: "VPN" },
      { id: "C", text: "Proxy Server" },
      { id: "D", text: "Load Balancer" }
    ],
    answer: "C",
    explanation: "Proxies filter, control, and log user Internet traffic to enforce policies."
  }
];
