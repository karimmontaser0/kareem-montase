export interface Project {
  id: string;
  title: string;
  shortTitle: string;
  skills: string[];
  description: string;
  image: string;
  results: string;
  media?: { type: 'photo' | 'video'; label: string; src: string }[];
}

export const projects: Project[] = [
  {
    id: "humanoid-receptionist",
    title: "AI-Powered Humanoid Receptionist Robot",
    shortTitle: "Humanoid Receptionist",
    skills: ["YOLOv8", "OpenCV", "Gemini API", "ElevenLabs", "Raspberry Pi", "Arduino"],
    description:
      "Designed and built an AI-driven humanoid receptionist with real-time face tracking using YOLOv8 and OpenCV. Integrated Google Cloud STT, Gemini API, and ElevenLabs for bilingual Arabic/English interaction. Achieved 95% face detection accuracy and stable 30-minute live demos.",
    image: "/src/assets/project-robot.jpg",
    results: "95% face detection accuracy · Stable 30-min live demos · Bilingual Arabic/English",
  },
  {
    id: "clinic-automation",
    title: "Clinic Appointment Automation",
    shortTitle: "Clinic Automation",
    skills: ["n8n", "Google Sheets API", "WhatsApp Business API", "REST APIs"],
    description:
      "End-to-end automation system syncing WhatsApp patient inquiries with Google Sheets and Gmail using n8n multi-agent orchestration. Reduced manual scheduling workload by 80% with near-zero manual intervention.",
    image: "/src/assets/project-clinic.jpg",
    results: "80% reduction in manual workload · Near-zero manual intervention",
  },
  {
    id: "jd-match",
    title: "JD-Match AI: Interview Copilot",
    shortTitle: "JD-Match AI",
    skills: ["Python", "Reflex", "Google Gemini API", "pdfplumber", "Radix UI"],
    description:
      "Developed a full-stack, AI-powered interview preparation tool. The application takes a candidate's PDF resume and a target Job Description, parses the text, and uses Google's Gemini 2.5 Flash-Lite LLM to act as a senior technical recruiter. It identifies skill gaps and generates a tailored, high-level technical interview guide with 5 targeted questions and explanations.",
    image: "/src/assets/project-jdmatch.jpg",
    results: "Drag-and-drop PDF uploading · Real-time state management · AI-driven skill gap analysis · 5 targeted interview questions per session",
  },
];
