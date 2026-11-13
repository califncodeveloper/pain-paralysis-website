import { NextRequest, NextResponse } from "next/server";

interface ChatMessage {
  role: "system" | "user" | "assistant";
  content: string;
}

const SYSTEM_PROMPT = `You are the official AI Medical & Clinical Assistant for "Pain & Paralysis Hospital", a premier 25-bedded, 24-hour hospital located in Virugambakkam, Chennai, Tamil Nadu, India.

Your primary mission is to provide helpful, compassionate, accurate, and professional information about the hospital's services, clinical treatments, admissions, and consultations.

KEY HOSPITAL INFORMATION:
- Hospital Name: Pain & Paralysis Hospital
- Facility: 25-Bedded, 24-Hour Hospital providing comprehensive Inpatient Care & Advanced Rehabilitation.
- Location: Virugambakkam, Chennai, Tamil Nadu - 600092 (Near Koyambedu & Vadapalani).
- 24/7 Telephone: +91 80155 59609 (or +91-80155-59609)
- Email: info@painandparalysis.com
- Working Hours: Open 24 Hours / 7 Days a week for Inpatient Care, Admissions & Emergency consultations.
- Clinical Leadership: Dr. Dinesh Anandhan (Chiropractor & Physiotherapist, Pain Management & Spine Specialist).

KEY CLINICAL SPECIALTIES & SERVICES:
1. Inpatient Care & Hospitalization:
   - 25-bed dedicated facility with 24-hour nursing supervision, physician monitoring, private/semi-private rooms, and round-the-clock supportive care for stroke, spine trauma, post-surgery, and severe chronic pain.
2. Robotic Neuro Rehabilitation:
   - Advanced upper and lower limb robotic gait & motor retraining for stroke recovery, paralysis, traumatic brain injury (TBI), and spinal cord injuries (SCI).
3. Advanced Spine Decompression:
   - Computerized, non-surgical axial spinal decompression therapy targeting herniated discs, bulging discs, degenerative disc disease, and sciatica.
4. Advanced Chiropractic & Alignment:
   - Gentle, biomechanically targeted spinal adjustments utilizing Gonstead principles to restore joint alignment and alleviate nerve impingement.
5. Neuro Physiotherapy:
   - Specialized rehabilitation for stroke, Parkinson's disease, hemiplegia, paraplegia, neuropathy, and movement disorders.
6. Comprehensive Pain Management:
   - Multidisciplinary protocols for acute and chronic back, neck, shoulder, and knee pain, avoiding unnecessary surgery whenever clinically appropriate.
7. Advanced 3D Gait Analysis:
   - Biomechanical sensor assessment of walking patterns, posture, and weight distribution.
8. Specialized Modalities:
   - High-Frequency EMG assessment, Biofeedback therapy, Class IV Laser treatment, Knee decompression, Pelvic floor therapy, and Hydrotherapy guidance.

COMMUNICATION & FORMATTING GUIDELINES:
- Greet patients warmly, empathetically, and professionally.
- Structure responses clearly using Markdown:
  - Use clean paragraphs for readability.
  - Use bullet points (* or -) for service lists, symptoms, or steps.
  - Use bold text for key medical terms, doctor names, or phone numbers.
  - Use headings (###) when separating distinct sections or topics.
  - Provide direct markdown links to website pages: [Book Consultation](/contact-us), [Explore Services](/services), [About Our Hospital](/about-us), [Patient FAQs](/faqs).
- Highlight contact details: Patients can call or WhatsApp **+91 80155 59609** anytime.
- MEDICAL SAFETY DISCLAIMER:
  - Clearly state that while you provide clinical information, AI guidance does not replace an in-person physical clinical examination.
  - If a user mentions emergency red flags (e.g., sudden chest pain, loss of bowel/bladder control, severe sudden weakness, acute trauma), urge them to seek immediate hospital emergency care or call +91 80155 59609 right away.
- Keep answers informative, concise, and focused on helping the patient take the next step.`;

// Prioritized list of active Groq production models
const CANDIDATE_MODELS = [
  "llama-3.1-8b-instant",   // Universally accessible, fast (~200ms latency), highly reliable
  "llama-3.1-70b-versatile", // High reasoning 70B
  "llama3-8b-8192",         // Fast Llama 3 fallback
  "mixtral-8x7b-32768",     // MoE fallback
];

function generateClinicalFallback(lastQuery: string): string {
  const query = lastQuery.toLowerCase();

  if (query.includes("time") || query.includes("hour") || query.includes("open") || query.includes("timing")) {
    return `### Hospital Timings & Emergency Care
**Pain & Paralysis Hospital** is open **24 Hours a day, 7 Days a week** for Inpatient Care, emergency consultations, and admissions.

* **Facility:** 25-Bedded Hospital with round-the-clock nursing & medical staff.
* **Address:** Virugambakkam, Chennai, Tamil Nadu - 600092
* **24/7 Helpline:** [+91 80155 59609](tel:+918015559609)
* [Directions & Contact Details](/contact-us)`;
  }

  if (query.includes("admit") || query.includes("inpatient") || query.includes("bed") || query.includes("stay")) {
    return `### Inpatient Rehabilitation & Hospital Care
Our hospital features a **25-Bed dedicated inpatient rehabilitation center** in Virugambakkam, Chennai:

* **24/7 Clinical Care:** Continuous nursing supervision and physician monitoring.
* **Who it is for:** Stroke recovery, spinal cord injury (SCI), post-surgical rehabilitation, severe paralysis, and acute chronic pain management.
* **Rooms:** Equipped private and semi-private rooms with therapeutic infrastructure.
* **Admissions Helpline:** Call **[+91 80155 59609](tel:+918015559609)** for immediate bed availability or [Schedule an Assessment](/contact-us).`;
  }

  if (query.includes("robotic") || query.includes("stroke") || query.includes("paralysis")) {
    return `### Robotic Neuro Rehabilitation & Stroke Care
At **Pain & Paralysis Hospital**, Chennai, we utilize cutting-edge **Robotic Neuro Rehabilitation**:

* **Neuroplasticity Training:** Intensive robotic-assisted upper and lower limb gait training to rewire neural pathways.
* **Conditions Treated:** Stroke (hemiplegia), traumatic brain injury (TBI), spinal cord injury (SCI), and Parkinson's.
* **Benefits:** Faster recovery of motor functions, balance restoration, and independent walking ability.

Would you like to [Schedule an In-Person Clinical Assessment](/contact-us) or speak with our neuro-rehab specialists at **+91 80155 59609**?`;
  }

  if (query.includes("decompression") || query.includes("spine") || query.includes("disc") || query.includes("sciatica") || query.includes("back")) {
    return `### Advanced Computerized Spine Decompression
Our hospital provides specialized non-surgical spinal decompression therapy:

* **How it Works:** Gentle, computerized motorized cycles create negative intradiscal pressure, allowing herniated or bulging discs to retract naturally.
* **Conditions Treated:** Slip disc, lumbar/cervical disc herniation, sciatica, and chronic degenerative disc disease.
* **Non-Surgical:** Zero surgery, zero downtime, and evidence-guided decompression protocols.

To check if you are a candidate, bring your MRI reports or [Book a Spine Consultation](/contact-us) or call **[+91 80155 59609](tel:+918015559609)**.`;
  }

  if (query.includes("doctor") || query.includes("dinesh") || query.includes("consult") || query.includes("appointment")) {
    return `### Consult Dr. Dinesh Anandhan & Clinical Team
**Dr. Dinesh Anandhan** is our Senior Chiropractor, Physiotherapist, and Spine Specialist:

* **Clinical Focus:** Non-surgical spine decompression, Gonstead chiropractic alignment, neuro-physiotherapy, and robotic motor recovery.
* **Location:** Virugambakkam, Chennai, Tamil Nadu - 600092
* **Appointments & Helpline:** Call **[+91 80155 59609](tel:+918015559609)**
* [Online Consultation Booking](/contact-us)`;
  }

  return `### Welcome to Pain & Paralysis Hospital
We are a premier **25-Bedded, 24-Hour Hospital** located in **Virugambakkam, Chennai**, specializing in:

* **Inpatient Hospitalization & 24/7 Nursing Care**
* **Robotic Neuro Rehabilitation** (Stroke recovery, paralysis, SCI)
* **Advanced Computerized Spine Decompression** (Herniated discs, sciatica)
* **Chiropractic Alignment & Neuro-Physiotherapy**
* **Advanced 3D Gait Analysis & Biomechanics**

**How can we assist your recovery today?**
* **24/7 Phone / WhatsApp:** [+91 80155 59609](tel:+918015559609)
* **Hospital Address:** Virugambakkam, Chennai, Tamil Nadu - 600092
* [Book an In-Person Consultation](/contact-us) • [Explore All Services](/services)`;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { messages } = body;

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: "Invalid request: 'messages' array is required." },
        { status: 400 }
      );
    }

    const sanitizedMessages: ChatMessage[] = messages
      .slice(-10)
      .map((msg: { role?: unknown; content?: unknown }): ChatMessage => ({
        role: msg.role === "assistant" ? "assistant" : "user",
        content: typeof msg.content === "string" ? msg.content.trim() : "",
      }))
      .filter((msg) => msg.content.length > 0);

    const lastUserMessage =
      sanitizedMessages[sanitizedMessages.length - 1]?.content || "";

    const apiKey = process.env.GROQ_API_KEY?.trim();

    if (!apiKey) {
      return NextResponse.json({
        role: "assistant",
        content: generateClinicalFallback(lastUserMessage),
      });
    }

    // Try prioritized candidate models in order
    let replyContent: string | null = null;
    let lastError: string | null = null;

    for (const model of CANDIDATE_MODELS) {
      try {
        const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
          },
          body: JSON.stringify({
            model,
            messages: [
              { role: "system", content: SYSTEM_PROMPT },
              ...sanitizedMessages,
            ],
            temperature: 0.5,
            max_tokens: 800,
            top_p: 0.9,
          }),
        });

        if (response.ok) {
          const data = await response.json();
          const content = data.choices?.[0]?.message?.content;
          if (content) {
            replyContent = content;
            break; // Success!
          }
        } else {
          const errorText = await response.text();
          console.warn(`Groq model ${model} returned ${response.status}:`, errorText);
          lastError = errorText;
        }
      } catch (fetchErr: unknown) {
        console.warn(`Fetch error for Groq model ${model}:`, fetchErr);
      }
    }

    if (replyContent) {
      return NextResponse.json({
        role: "assistant",
        content: replyContent,
      });
    }

    // If all models failed or network was blocked, provide intelligent clinical fallback
    console.error("All Groq models failed. Last error:", lastError);
    return NextResponse.json({
      role: "assistant",
      content: generateClinicalFallback(lastUserMessage),
    });
  } catch (err: unknown) {
    console.error("Chat API handler exception:", err);
    return NextResponse.json({
      role: "assistant",
      content: generateClinicalFallback("help"),
    });
  }
}
