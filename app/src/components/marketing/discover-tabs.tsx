import { useState } from "react";
import { SectionHeading } from "@/components/marketing/section-heading";
import { TabSwitch } from "@/components/marketing/tab-switch";
import { Carousel } from "@/components/marketing/carousel";
import { ExperienceCard } from "@/components/marketing/experience-card";
import { StayCard } from "@/components/marketing/stay-card";
import { EXPERIENCES, STAYS } from "@/lib/content";

type Tab = "adventures" | "stays";

const COPY: Record<
  Tab,
  {
    eyebrow: string;
    title: string;
    accent: string;
    description: string;
    to: string;
  }
> = {
  adventures: {
    eyebrow: "This Week",
    title: "Upcoming",
    accent: "Adventures",
    description: "Limited slots — book before they're gone.",
    to: "/adventures",
  },
  stays: {
    eyebrow: "Where to Stay",
    title: "Featured",
    accent: "Apartments",
    description: "Verified hosts, stunning locations.",
    to: "/stay",
  },
};

/**
 * Replaces two separate "Adventures" and "Stays" carousel sections with one
 * switchable section — same content, one less repeated template on the page.
 */
export function DiscoverTabs() {
  const [tab, setTab] = useState<Tab>("adventures");
  const copy = COPY[tab];

  return (
    <div>
      <SectionHeading
        eyebrow={copy.eyebrow}
        title={copy.title}
        accent={copy.accent}
        description={copy.description}
        action={{ label: "View all", to: copy.to }}
      />

      <div className="mt-6">
        <TabSwitch
          tabs={[
            { id: "adventures", label: "Adventures" },
            { id: "stays", label: "Stays" },
          ]}
          value={tab}
          onChange={setTab}
        />
      </div>

      <div className="mt-8">
        <Carousel>
          {tab === "adventures"
            ? EXPERIENCES.map((item) => (
                <ExperienceCard key={item.id} item={item} />
              ))
            : STAYS.map((item) => <StayCard key={item.id} item={item} />)}
        </Carousel>
      </div>
    </div>
  );
}
