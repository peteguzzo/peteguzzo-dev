// tina/config.ts
import { defineConfig } from "tinacms";
var config_default = defineConfig({
  branch: process.env.GITHUB_BRANCH || "dev",
  clientId: process.env.TINA_PUBLIC_CLIENT_ID || void 0,
  token: process.env.TINA_TOKEN || void 0,
  build: {
    outputFolder: "admin",
    publicFolder: "public"
  },
  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "public"
    }
  },
  schema: {
    collections: [
      {
        name: "homePage",
        label: "Home Page",
        path: "src/content/pages",
        format: "json",
        ui: {
          allowedActions: { create: false, delete: false },
          router: () => "/"
        },
        fields: [
          // ── Hero ──────────────────────────────────────────────
          {
            type: "object",
            name: "hero",
            label: "Hero",
            fields: [
              { type: "string", name: "eyebrow", label: "Eyebrow" },
              {
                type: "string",
                name: "title",
                label: "Main Title",
                ui: { component: "textarea" }
              },
              {
                type: "string",
                name: "body",
                label: "Body Text",
                ui: { component: "textarea" }
              },
              {
                type: "string",
                name: "titleSize",
                label: "Title Size",
                options: ["text-3xl", "text-4xl", "text-5xl", "text-6xl"]
              },
              {
                type: "string",
                name: "titleFont",
                label: "Title Font",
                options: ["font-display", "font-sans"]
              },
              {
                type: "object",
                name: "ctas",
                label: "Buttons",
                list: true,
                ui: { itemProps: (item) => ({ label: item.label }) },
                fields: [
                  { type: "string", name: "label", label: "Label" },
                  { type: "string", name: "href", label: "Link" },
                  {
                    type: "string",
                    name: "variant",
                    label: "Style",
                    options: ["primary", "secondary", "ghost"]
                  }
                ]
              }
            ]
          },
          // ── Services ──────────────────────────────────────────
          {
            type: "object",
            name: "services",
            label: "What I Actually Do",
            fields: [
              { type: "string", name: "heading", label: "Heading" },
              {
                type: "string",
                name: "headingSize",
                label: "Heading Size",
                options: ["text-xl", "text-2xl", "text-3xl", "text-4xl"]
              },
              {
                type: "string",
                name: "intro",
                label: "Intro Text",
                ui: { component: "textarea" }
              },
              {
                type: "object",
                name: "items",
                label: "Service Items",
                list: true,
                ui: { itemProps: (item) => ({ label: item.title }) },
                fields: [
                  { type: "string", name: "n", label: "Number (e.g. 01)" },
                  { type: "string", name: "title", label: "Title" },
                  {
                    type: "string",
                    name: "body",
                    label: "Description",
                    ui: { component: "textarea" }
                  }
                ]
              }
            ]
          },
          // ── Who Hires Me ──────────────────────────────────────
          {
            type: "object",
            name: "whoHiresMe",
            label: "Who Hires Me",
            fields: [
              { type: "string", name: "heading", label: "Heading" },
              {
                type: "string",
                name: "body",
                label: "Body",
                ui: { component: "textarea" }
              }
            ]
          },
          // ── Current Projects ──────────────────────────────────
          {
            type: "object",
            name: "currentProjects",
            label: "Current Projects",
            list: true,
            ui: { itemProps: (item) => ({ label: item.title }) },
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "badge", label: "Status Badge" },
              {
                type: "string",
                name: "body",
                label: "Description",
                ui: { component: "textarea" }
              },
              { type: "image", name: "image", label: "Image" },
              { type: "string", name: "href", label: "Link URL" },
              { type: "string", name: "linkLabel", label: "Link Label" },
              { type: "boolean", name: "hasVideo", label: "Has Video?" }
            ]
          },
          // ── About Teaser ──────────────────────────────────────
          {
            type: "object",
            name: "aboutTeaser",
            label: "About Teaser",
            fields: [
              { type: "string", name: "heading", label: "Heading" },
              {
                type: "string",
                name: "quote",
                label: "Quote",
                ui: { component: "textarea" }
              },
              { type: "string", name: "ctaLabel", label: "Button Label" },
              { type: "string", name: "ctaHref", label: "Button Link" }
            ]
          },
          // ── Final CTA ─────────────────────────────────────────
          {
            type: "object",
            name: "finalCta",
            label: "Final Call to Action",
            fields: [
              {
                type: "string",
                name: "heading",
                label: "Heading",
                ui: { component: "textarea" }
              },
              {
                type: "string",
                name: "headingSize",
                label: "Heading Size",
                options: ["text-2xl", "text-3xl", "text-4xl", "text-5xl"]
              },
              { type: "string", name: "buttonLabel", label: "Button Label" },
              { type: "string", name: "buttonHref", label: "Button Link" },
              {
                type: "string",
                name: "buttonStyle",
                label: "Button Style",
                options: ["primary", "outline", "ghost"]
              }
            ]
          }
        ]
      }
    ]
  }
});
export {
  config_default as default
};
