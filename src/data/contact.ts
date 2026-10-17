// src/data/contact.ts

export interface ContactInfo {
  email: string;
  phone: string;
  linkedin: string;
  github?: string;
  twitter?: string;
  location: string;
  locationCoordinates?: {
    city: string;
    country: string;
  };
}

export const contact: ContactInfo = {
  email: "hamad.yunrizal@gmail.com",
  phone: "088294174402",
  linkedin: "https://www.linkedin.com/in/hammadyunrizal-3b0b391b9/",
  github: "https://github.com/Yunrizal145",
  twitter: "https://twitter.com/yunrizal",
  location: "Sukabumi, Indonesia 43121",
  locationCoordinates: {
    city: "Sukabumi",
    country: "Indonesia"
  }
};
