<script lang="ts">
  let india = "🇮🇳";

  let positionValues = {
    none: "{position}",
    tezucka: "C.E.O., Founder, Developer",
    dogegram: "C.M.O., Co-Founder",
    hpair: "Delegate, Scholar Delegate",
    hmun: "Scholar, Delegate",
    peace: "Founder, President",
    qmtc: "Head Of Strategic Development",
    brainery: "Head Of Partnerships",
    cyes: "Member",
  };

  let position = positionValues.none;
</script>

<div class="w-full h-fit xl:h-screen bg-black text-white pb-5">
  <div class="p-2 text-6xl leading-none font-body md:text-8xl">
    <span>Sagnik</span>
    <span class="m-5" />
    <span>Chatterjee</span>
  </div>

  <div class="pl-5 pt-2">
    <span class="font-mono"
      >A creative and innovative person who likes to <span
        class="italic underline">innovate things</span
      >.</span
    >
  </div>

  <br />
  <br />
  <br />
  <br />

  <div class="w-full text-left sm:text-right">
    <span class="pr-5 pl-5 font-mono text-base sm:text-2xl">Hi there 👋,</span>
    <br />
    <span class="pr-5 pl-5 font-mono text-base sm:text-2xl"
      >I am a high-school student from
      <span
        on:click={() => {
          if (india === "India") {
            india = "🇮🇳";
          } else {
            india = "India";
          }
        }}
        on:mouseenter={() => (india = "India")}
        on:mouseleave={() => (india = "🇮🇳")}
        on:keypress={() => (india = "India")}
        class="sm:pl-0 pl-5">{india}</span
      >.</span
    >
  </div>

  <div class="flex justify-left md:p-0 pt-10">
    <div class="text-justify sm:w-96 w-80 pl-5 font-mono text-sm">
      <span>
        I am currently working on problems to solve developmental disruptions in
        India due to education system, to make electronic vehicles more
        sustainable and affordable for everyone and increasing security in EVs
        and researching on sustainable development and education system
        loopholes.
      </span>
    </div>
  </div>

  <div
    class="flex md:justify-between justify-center md:flex-row flex-col md:pt-0 pt-10"
  >
    <div class="flex justify-start items-center pl-5 font-mono text-2xl">
      <span>
        As {position}
      </span>
    </div>
    <div
      class="text-justify sm:w-96 w-80 pr-5 pl-5 font-mono text-sm md:pt-0 pt-10 flex justify-start"
    >
      <span>
        Also holding positions in
        <span
          class="underline cursor-pointer"
          on:click={() => (position = positionValues.tezucka)}
          on:keypress={() => (position = positionValues.tezucka)}
          on:mouseenter={() => (position = positionValues.tezucka)}
          >Tezucka</span
        >,
        <span
          class="underline cursor-pointer"
          on:click={() => (position = positionValues.dogegram)}
          on:keypress={() => (position = positionValues.dogegram)}
          on:mouseenter={() => (position = positionValues.dogegram)}
          >Dogegram</span
        >,
        <span
          class="underline cursor-pointer"
          on:click={() => (position = positionValues.hpair)}
          on:keypress={() => (position = positionValues.hpair)}
          on:mouseenter={() => (position = positionValues.hpair)}
          >Harvard Project for Asian and International Relations (HPAIR)</span
        >,
        <span
          class="underline cursor-pointer"
          on:click={() => (position = positionValues.hmun)}
          on:keypress={() => (position = positionValues.hmun)}
          on:mouseenter={() => (position = positionValues.hmun)}
          >Harvard Model United Nations</span
        >,
        <span
          class="underline cursor-pointer"
          on:click={() => (position = positionValues.peace)}
          on:keypress={() => (position = positionValues.peace)}
          on:mouseenter={() => (position = positionValues.peace)}
          >The Peace Software</span
        >,
        <span
          class="underline cursor-pointer"
          on:click={() => (position = positionValues.qmtc)}
          on:keypress={() => (position = positionValues.qmtc)}
          on:mouseenter={() => (position = positionValues.qmtc)}>QMTC</span
        >,
        <span
          class="underline cursor-pointer"
          on:click={() => (position = positionValues.brainery)}
          on:keypress={() => (position = positionValues.brainery)}
          on:mouseenter={() => (position = positionValues.brainery)}
          >Brooks Brainery</span
        >
        and
        <span
          class="underline cursor-pointer"
          on:click={() => (position = positionValues.cyes)}
          on:keypress={() => (position = positionValues.cyes)}
          on:mouseenter={() => (position = positionValues.cyes)}
          >Crimson Youth Entrepreneurship Society</span
        >
      </span>
    </div>
  </div>

  <div class="w-full pl-5 font-mono md:pt-0 pt-10">
    <span
      >Say Hi 👋!: <a href="mailto:sagnikchatterjee450@gmail.com"
        >sagnikchatterjee450@gmail.com</a
      ></span
    >
    <br />
    <span>
      Socials:
      <a
        href="https://github.com/sagnikchatterjee450"
        target="_blank"
        rel="noreferrer">Github</a
      >,
      <a
        href="https://twitter.com/originalsagnik"
        target="_blank"
        rel="noreferrer">Twitter</a
      >,
      <a
        href="https://www.instagram.com/originalsagnik"
        target="_blank"
        rel="noreferrer">Instagram</a
      >,
      <a
        href="https://www.linkedin.com/in/sagnik-chatterjee-0bab96184/"
        target="_blank"
        rel="noreferrer">Linkedin</a
      >
    </span>
    <br />
    <span
      >@2023 — Designed and Coded by <a
        href="https://anis.ml"
        target="_blank"
        rel="noreferrer">Anish Mandal</a
      ></span
    >
  </div>
</div>
