"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { ArrowRight, CheckCircle, Upload, UserPlus } from "lucide-react";

const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID";
const EMAILJS_TEMPLATE_ADMIN = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ADMIN || "YOUR_EMAILJS_TEMPLATE_ADMIN_ID";
const EMAILJS_TEMPLATE_APPLICANT = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_APPLICANT || "YOUR_EMAILJS_TEMPLATE_APPLICANT_ID";
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY";
const ADMIN_EMAIL = "siruvani.ch@gmail.com";

const initialForm = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  dob: "",
  gender: "",
  maritalStatus: "",
  nativity: "",
  address: "",
  photoName: "",
  about: "",
  schoolName: "",
  collegeName: "",
  graduationDetails: "",
  companyName: "",
  designation: "",
  otherOrganizations: "",
  facebookProfile: "",
  instagramProfile: "",
  linkedInProfile: "",
  referenceMember: "",
  hearAbout: "",
};

export default function JoinPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setForm((current) => ({ ...current, photoName: file.name }));
    }
  };

  const sendEmailNotifications = async () => {
    if (
      EMAILJS_SERVICE_ID.includes("YOUR_") ||
      EMAILJS_TEMPLATE_ADMIN.includes("YOUR_") ||
      EMAILJS_TEMPLATE_APPLICANT.includes("YOUR_") ||
      EMAILJS_PUBLIC_KEY.includes("YOUR_")
    ) {
      throw new Error("EmailJS is not configured. Set NEXT_PUBLIC_EMAILJS_* values in .env.local.");
    }

    const templateParams = {
      applicant_name: `${form.firstName} ${form.lastName}`,
      applicant_email: form.email,
      applicant_phone: form.phone,
      applicant_dob: form.dob,
      applicant_gender: form.gender,
      applicant_marital_status: form.maritalStatus,
      applicant_nativity: form.nativity,
      applicant_address: form.address,
      applicant_photo: form.photoName || "Not provided",
      applicant_about: form.about,
      applicant_school: form.schoolName,
      applicant_college: form.collegeName,
      applicant_graduation: form.graduationDetails,
      applicant_company: form.companyName,
      applicant_designation: form.designation,
      applicant_other_organizations: form.otherOrganizations,
      applicant_facebook: form.facebookProfile,
      applicant_instagram: form.instagramProfile,
      applicant_linkedin: form.linkedInProfile,
      applicant_reference: form.referenceMember,
      applicant_hear_about: form.hearAbout,
      admin_email: ADMIN_EMAIL,
    };

    await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ADMIN, templateParams, EMAILJS_PUBLIC_KEY);
    await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_APPLICANT, templateParams, EMAILJS_PUBLIC_KEY);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await sendEmailNotifications();
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (error) {
      console.error("EmailJS notification failed:", error);

      const emailTo = ADMIN_EMAIL;
      const subject = "Siruvani Foundation Membership Application";
      const body = `Name: ${form.firstName} ${form.lastName}\nEmail: ${form.email}\nPhone: ${form.phone}\nDate of Birth: ${form.dob}\nGender: ${form.gender}\nMarital Status: ${form.maritalStatus}\nNativity: ${form.nativity}\nAddress: ${form.address}\nPhoto: ${form.photoName || "Not provided"}\nAbout: ${form.about}\nSchool Name: ${form.schoolName}\nCollege Name: ${form.collegeName}\nGraduation Details: ${form.graduationDetails}\nCompany Name: ${form.companyName}\nDesignation: ${form.designation}\nOther Organizations: ${form.otherOrganizations}\nFacebook: ${form.facebookProfile}\nInstagram: ${form.instagramProfile}\nLinkedIn: ${form.linkedInProfile}\nReference Member: ${form.referenceMember}\nHeard About Us: ${form.hearAbout}`;

      window.location.href = `mailto:${emailTo}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-slate-950 text-white py-24">
        <div className="container-custom mx-auto px-4">
          <div className="max-w-xl mx-auto text-center bg-slate-900/90 border border-white/10 rounded-[32px] p-10 shadow-2xl">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-lime-400 text-slate-950">
              <CheckCircle size={40} />
            </div>
            <h1 className="text-3xl font-semibold mb-4">Application Submitted!</h1>
            <p className="text-slate-300 mb-8">Thank you for applying to Siruvani Foundation. We will review your details and contact you within 2-3 working days.</p>
            <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-6 mb-8 text-left text-slate-300 space-y-3">
              <p><span className="font-semibold text-white">Name:</span> {form.firstName} {form.lastName}</p>
              <p><span className="font-semibold text-white">Email:</span> {form.email}</p>
              <p><span className="font-semibold text-white">Phone:</span> {form.phone}</p>
              <p><span className="font-semibold text-white">How did you hear about us:</span> {form.hearAbout || "Not specified"}</p>
            </div>
            <button
              onClick={() => {
                setSubmitted(false);
                setForm(initialForm);
              }}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-lime-400 px-8 py-3 text-slate-950 font-semibold shadow-xl shadow-lime-500/30 hover:bg-lime-300 transition"
            >
              Submit Another Application <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0b3043] text-white">
      <section className="relative overflow-hidden pb-16 pt-24">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-[#0b3043] opacity-95" />
        <div className="absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-600/20 blur-3xl" />
        <div className="absolute right-10 top-20 h-56 w-56 rounded-full bg-lime-400/10 blur-3xl" />
        <div className="container-custom relative z-10 px-4">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-cyan-300/80">Join the Community</p>
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-6">Become a Member</h1>
            <p className="mx-auto max-w-2xl text-slate-300 text-base md:text-lg leading-relaxed">
              Join our vibrant community and be part of something extraordinary. Fill out the form below to begin your journey with Siruvani Foundation.
            </p>
          </div>
        </div>
      </section>

      <section className="container-custom px-4 pb-24">
        <div className="mx-auto max-w-6xl rounded-[32px] border border-white/10 bg-slate-950/90 shadow-2xl">
          <div className="grid gap-8 lg:grid-cols-[320px_1fr]">
            <div className="rounded-[32px] bg-[#072538] p-10 text-slate-100">
              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-3xl bg-white/10 text-cyan-200">
                <UserPlus size={28} />
              </div>
              <h2 className="text-2xl font-semibold mb-3">Application Form</h2>
              <p className="text-slate-400 leading-relaxed">
                Complete all fields to join our community.
              </p>
            </div>

            <div className="p-10">
              <form id="membership-form" onSubmit={handleSubmit} className="space-y-8">
                <section className="rounded-[28px] border border-white/10 bg-white/5 p-6">
                  <div className="mb-6 flex items-center gap-3">
                    <span className="inline-flex h-3 w-3 rounded-full bg-amber-400" />
                    <h3 className="text-xl font-semibold">Personal Information</h3>
                    <span className="text-slate-400 text-sm">(Required)</span>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label className="form-label">First Name *</label>
                      <input
                        name="firstName"
                        value={form.firstName}
                        onChange={handleChange}
                        type="text"
                        placeholder="First name"
                        className="form-input bg-slate-800 text-white placeholder-slate-400 border-slate-600"
                        required
                      />
                    </div>
                    <div>
                      <label className="form-label">Last Name *</label>
                      <input
                        name="lastName"
                        value={form.lastName}
                        onChange={handleChange}
                        type="text"
                        placeholder="Last name"
                        className="form-input bg-slate-800 text-white placeholder-slate-400 border-slate-600"
                        required
                      />
                    </div>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label className="form-label">Email Address *</label>
                      <input
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        type="email"
                        placeholder="Email address"
                        className="form-input bg-slate-800 text-white placeholder-slate-400 border-slate-600"
                        required
                      />
                    </div>
                    <div>
                      <label className="form-label">Contact Number *</label>
                      <input
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        type="tel"
                        placeholder="Enter 10-digit mobile number"
                        className="form-input bg-slate-800 text-white placeholder-slate-400 border-slate-600"
                        required
                      />
                    </div>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label className="form-label">Date of Birth *</label>
                      <input
                        name="dob"
                        value={form.dob}
                        onChange={handleChange}
                        type="date"
                        className="form-input bg-slate-800 text-white placeholder-slate-400 border-slate-600"
                        required
                      />
                    </div>
                    <div>
                      <label className="form-label">Gender *</label>
                      <select
                        name="gender"
                        value={form.gender}
                        onChange={handleChange}
                        className="form-input bg-slate-800 text-white placeholder-slate-400 border-slate-600"
                        required
                      >
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label className="form-label">Marital Status *</label>
                      <select
                        name="maritalStatus"
                        value={form.maritalStatus}
                        onChange={handleChange}
                        className="form-input bg-slate-800 text-white placeholder-slate-400 border-slate-600"
                        required
                      >
                        <option value="">Select Marital Status</option>
                        <option value="single">Single</option>
                        <option value="married">Married</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="form-label">Nativity *</label>
                      <input
                        name="nativity"
                        value={form.nativity}
                        onChange={handleChange}
                        type="text"
                        placeholder="Your native place"
                        className="form-input bg-slate-800 text-white placeholder-slate-400 border-slate-600"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="form-label">Residential Address in Chennai *</label>
                    <textarea
                      name="address"
                      value={form.address}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Complete address"
                      className="form-input resize-none bg-slate-800 text-white placeholder-slate-400 border-slate-600"
                      required
                    />
                  </div>
                  <div>
                    <label className="form-label">Upload Photo <span className="text-slate-400 text-xs">(Optional)</span></label>
                    <label className="flex items-center justify-between gap-4 rounded-3xl border border-white/10 bg-slate-950/90 px-4 py-4 text-slate-200 cursor-pointer">
                      <span>{form.photoName || "Choose Photo"}</span>
                      <Upload size={18} />
                      <input
                        type="file"
                        accept="image/png,image/jpeg"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                    </label>
                    <p className="mt-2 text-xs text-slate-500">JPG, PNG up to 5MB</p>
                  </div>
                  <div>
                    <label className="form-label">Please tell us more about yourself</label>
                    <textarea
                      name="about"
                      value={form.about}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Share your story and interests..."
                      className="form-input resize-none bg-slate-800 text-white placeholder-slate-400 border-slate-600"
                    />
                  </div>
                </section>

                <section className="rounded-[28px] border border-white/10 bg-white/5 p-6">
                  <div className="mb-6 flex items-center gap-3">
                    <span className="inline-flex h-3 w-3 rounded-full bg-amber-400" />
                    <h3 className="text-xl font-semibold">Education Information</h3>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label className="form-label">School Name *</label>
                      <input
                        name="schoolName"
                        value={form.schoolName}
                        onChange={handleChange}
                        type="text"
                        placeholder="Enter your school name"
                        className="form-input bg-slate-800 text-white placeholder-slate-400 border-slate-600"
                        required
                      />
                    </div>
                    <div>
                      <label className="form-label">College Name *</label>
                      <input
                        name="collegeName"
                        value={form.collegeName}
                        onChange={handleChange}
                        type="text"
                        placeholder="Enter your college name"
                        className="form-input bg-slate-800 text-white placeholder-slate-400 border-slate-600"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="form-label">Graduation Details *</label>
                    <input
                      name="graduationDetails"
                      value={form.graduationDetails}
                      onChange={handleChange}
                      type="text"
                      placeholder="Enter your graduation details"
                      className="form-input bg-slate-800 text-white placeholder-slate-400 border-slate-600"
                      required
                    />
                  </div>
                </section>

                <section className="rounded-[28px] border border-white/10 bg-white/5 p-6">
                  <div className="mb-6 flex items-center gap-3">
                    <span className="inline-flex h-3 w-3 rounded-full bg-amber-400" />
                    <h3 className="text-xl font-semibold">Professional Information</h3>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label className="form-label">Company Name *</label>
                      <input
                        name="companyName"
                        value={form.companyName}
                        onChange={handleChange}
                        type="text"
                        placeholder="Company name"
                        className="form-input bg-slate-800 text-white placeholder-slate-400 border-slate-600"
                        required
                      />
                    </div>
                    <div>
                      <label className="form-label">Your Designation *</label>
                      <input
                        name="designation"
                        value={form.designation}
                        onChange={handleChange}
                        type="text"
                        placeholder="Designation"
                        className="form-input bg-slate-800 text-white placeholder-slate-400 border-slate-600"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="form-label">Other organizations that you are presently associated with along with position held</label>
                    <textarea
                      name="otherOrganizations"
                      value={form.otherOrganizations}
                      onChange={handleChange}
                      rows={3}
                      placeholder="List organizations and roles"
                      className="form-input resize-none bg-slate-800 text-white placeholder-slate-400 border-slate-600"
                    />
                  </div>
                </section>

                <section className="rounded-[28px] border border-white/10 bg-white/5 p-6">
                  <div className="mb-6 flex items-center gap-3">
                    <span className="inline-flex h-3 w-3 rounded-full bg-emerald-400" />
                    <h3 className="text-xl font-semibold">Social Media Profiles <span className="text-slate-400 text-sm">(Optional)</span></h3>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label className="form-label">Facebook Profile</label>
                      <input
                        name="facebookProfile"
                        value={form.facebookProfile}
                        onChange={handleChange}
                        type="text"
                        placeholder="Facebook profile URL"
                        className="form-input bg-slate-800 text-white placeholder-slate-400 border-slate-600"
                      />
                    </div>
                    <div>
                      <label className="form-label">Instagram Profile</label>
                      <input
                        name="instagramProfile"
                        value={form.instagramProfile}
                        onChange={handleChange}
                        type="text"
                        placeholder="Instagram profile URL"
                        className="form-input bg-slate-800 text-white placeholder-slate-400 border-slate-600"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="form-label">LinkedIn Profile</label>
                    <input
                      name="linkedInProfile"
                      value={form.linkedInProfile}
                      onChange={handleChange}
                      type="text"
                      placeholder="LinkedIn profile URL"
                      className="form-input bg-slate-800 text-white placeholder-slate-400 border-slate-600"
                    />
                  </div>
                </section>

                <section className="rounded-[28px] border border-white/10 bg-white/5 p-6">
                  <div className="mb-6 flex items-center gap-3">
                    <span className="inline-flex h-3 w-3 rounded-full bg-amber-400" />
                    <h3 className="text-xl font-semibold">Reference & Discovery</h3>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label className="form-label">Please share reference of existing Siruvani Member, if any</label>
                      <input
                        name="referenceMember"
                        value={form.referenceMember}
                        onChange={handleChange}
                        type="text"
                        placeholder="Member name or contact details"
                        className="form-input bg-slate-800 text-white placeholder-slate-400 border-slate-600"
                      />
                    </div>
                    <div>
                      <label className="form-label">How did you come to know about Siruvani Foundation ? *</label>
                      <select
                        name="hearAbout"
                        value={form.hearAbout}
                        onChange={handleChange}
                        className="form-input bg-slate-800 text-white placeholder-slate-400 border-slate-600"
                        required
                      >
                        <option value="">Select an option</option>
                        <option value="friend">Friend / Family</option>
                        <option value="social">Social Media</option>
                        <option value="event">Event / Gathering</option>
                        <option value="search">Search Engine</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                </section>

                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-lime-400 px-10 py-4 text-slate-950 font-semibold shadow-2xl shadow-lime-500/25 hover:bg-lime-300 transition"
                  >
                    Submit Application <ArrowRight size={18} />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
