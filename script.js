document.documentElement.classList.add("js");

const header = document.querySelector("#site-header");
const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector("#site-nav");
const progressBar = document.querySelector("#scroll-progress-bar");
const projectDialog = document.querySelector("#project-dialog");
const toast = document.querySelector("#toast");
const heroVideo = document.querySelector(".hero__video");
const caseStudyVideo = document.querySelector(".case-study__video");
let lastFocusedElement = null;
let toastTimer = null;

const projects = {
  shoes200: {
    kicker: "CASE / 01 · WHITE LABEL / DOUYIN",
    title: "劳保鞋 200W+ 混剪",
    poster: "./assets/covers/shoes-200w.jpg",
    video: "./assets/videos-full/shoes-200w.mp4",
    caption: "白牌鞋服 / 抖音 / 200W+ 播放 / 混剪",
    role: "混剪 / 节奏设计 / 素材重组",
    lede: "白牌劳保鞋内容，用重量测试、耐磨测试和材质对比等强信息动作推动完播。",
    goal: "在抖音信息流中快速呈现产品耐用、防砸和防滑卖点，让测试画面直接承担说服作用。",
    idea: "把高辨识度的测试镜头放在前段，通过重量对比、工具冲击和鞋底细节形成连续的信息刺激。",
    output: "完整原片，全长约 2 分 53 秒；仅做网页分辨率与码率压缩，不剪切内容。",
    result: "据你提供的数据，这条作品在抖音获得 200W+ 播放。"
  },
  shoes50: {
    kicker: "CASE / 01B · WHITE LABEL / DOUYIN",
    title: "白牌鞋服混剪",
    poster: "./assets/covers/shoes-50w.jpg",
    video: "./assets/videos-full/shoes-50w.mp4",
    caption: "白牌鞋服 / 抖音 / 50W+ 播放 / 混剪",
    role: "混剪 / 口播节奏 / 素材编排",
    lede: "以穿搭痛点和产品对比组织混剪，在较短节奏内持续提供购买理由。",
    goal: "把口播、试穿和产品细节素材组合成信息密度更高的抖音内容。",
    idea: "用问题式开头带出使用痛点，再通过试穿、细节与卖点字幕快速完成产品证明。",
    output: "完整原片，全长约 2 分 35 秒；保留人物口播、试穿与鞋款细节。",
    result: "据你提供的数据，这条作品在抖音获得 50W+ 播放。"
  },
  digital100: {
    kicker: "CASE / 02 · KAISHIJIE / DOUYIN",
    title: "凯诗捷产品演示",
    poster: "./assets/covers/digital-100w.jpg",
    video: "./assets/videos-full/digital-100w.mp4",
    caption: "凯诗捷 / 抖音 / 100W 播放 / 拍摄剪辑",
    role: "拍摄 / 剪辑 / 原创内容",
    lede: "围绕凯诗捷户外产品体验进行原创拍摄与剪辑，用真实反应和现场演示建立可信度。",
    goal: "让用户在街头互动和产品体验中快速理解产品用途，并形成自然的内容观看动机。",
    idea: "以现场体验和人物反馈作为主线，把产品使用动作与利益点字幕同步组织，减少硬广感。",
    output: "完整原片，全长约 1 分 01 秒；由本人完成原创拍摄与剪辑。",
    result: "据你提供的数据，这条作品在抖音获得 100W 播放。"
  },
  digital50: {
    kicker: "CASE / 02B · KAISHIJIE / DOUYIN",
    title: "凯诗捷口播内容",
    poster: "./assets/covers/digital-50w.jpg",
    video: "./assets/videos-full/digital-50w.mp4",
    caption: "凯诗捷 / 抖音 / 50W 播放 / 拍摄剪辑",
    role: "拍摄 / 剪辑 / 产品展示",
    lede: "以人物展示和产品使用动作组织信息流内容，让产品卖点更直观。",
    goal: "突出产品外形、使用方式和实际感受，同时适应抖音短视频的快速观看节奏。",
    idea: "通过人物动作、产品特写和直接字幕建立连续的信息链路。",
    output: "完整原片，全长约 29 秒。",
    result: "据你提供的数据，这条作品在抖音获得 50W 播放。"
  },
  digital40: {
    kicker: "CASE / 02C · KAISHIJIE / DOUYIN",
    title: "凯诗捷场景讲解",
    poster: "./assets/covers/digital-40w.jpg",
    video: "./assets/videos-full/digital-40w.mp4",
    caption: "凯诗捷 / 抖音 / 40W 播放 / 拍摄剪辑",
    role: "拍摄 / 剪辑 / 场景叙事",
    lede: "从生活场景切入产品，把受众痛点与产品使用过程放进同一段叙事。",
    goal: "用生活化场景降低理解成本，让产品功能与日常需求建立联系。",
    idea: "先展示使用场景，再进入产品操作与反馈，让卖点跟随内容自然出现。",
    output: "完整原片，全长约 48 秒。",
    result: "据你提供的数据，这条作品在抖音获得 40W 播放。"
  },
  books01: {
    kicker: "CASE / 03 · WHITE LABEL / CHANNELS",
    title: "图书内容制作",
    poster: "./assets/covers/books-01.jpg",
    video: "./assets/videos-full/books-01.mp4",
    caption: "白牌图书 / 视频号 / 约30W 播放 / 拍摄剪辑",
    role: "拍摄 / 剪辑 / 内容包装",
    lede: "白牌图书内容，以现实画面、书本内页与字幕信息组合成适合视频号传播的表达。",
    goal: "把图书主题转化为更直观的生活场景与问题，让用户在短时间内理解内容价值。",
    idea: "通过场景素材、翻书镜头和高亮文字形成节奏，使核心观点始终保持可读。",
    output: "完整原片，全长约 51 秒，来自视频号图书类目项目。",
    result: "据你提供的信息，图书项目在视频号的播放量约 30W。"
  },
  books02: {
    kicker: "CASE / 03B · WHITE LABEL / CHANNELS",
    title: "图书长内容",
    poster: "./assets/covers/books-02.jpg",
    video: "./assets/videos-full/books-02.mp4",
    caption: "白牌图书 / 视频号 / 约30W 播放 / 拍摄剪辑",
    role: "拍摄 / 剪辑 / 长内容组织",
    lede: "以人物、书本与信息画面组织较长篇的图书内容，并通过持续的字幕和镜头变化维持观看。",
    goal: "在较长时间内保持内容主题清晰，同时用场景切换降低单一画面的疲劳。",
    idea: "把核心信息拆成多个可快速理解的段落，通过人物画面、书本内页和说明图交替推进。",
    output: "完整原片，全长约 3 分 31 秒，不裁剪内容。",
    result: "据你提供的信息，图书项目在视频号的播放量约 30W。"
  },
  finance: {
    kicker: "CASE / 04 · FINANCE / ORAL",
    title: "财经口播制作",
    poster: "./assets/covers/finance-oral.jpg",
    video: "./assets/videos-full/finance-oral.mp4",
    caption: "财经内容 / 口播 / 字幕与信息图包装",
    role: "口播剪辑 / 字幕 / 动效包装",
    lede: "将财经口播与信息图、实拍素材结合，让抽象概念更易读、更有节奏。",
    goal: "在保留口播信息完整度的同时，用视觉变化解释观点并维持观看注意力。",
    idea: "围绕口播重点同步拆分信息图，通过素材切换、关键词强调和前后景层次进行包装。",
    output: "完整原片，全长约 25 秒；网站播放版由原始 4K 竖屏内容压缩生成。",
    result: "该作品用于展示口播和信息图包装能力；播放数据暂未提供。"
  }
};

function setBodyLock(locked) {
  document.body.classList.toggle("is-locked", locked);
}

function showToast(message) {
  window.clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("is-visible");
  toastTimer = window.setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 2200);
}

function updateScrollState() {
  const scrollTop = window.scrollY;
  const scrollable =
    document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const progress = scrollable > 0 ? Math.min(scrollTop / scrollable, 1) : 0;

  header.classList.toggle("is-scrolled", scrollTop > 24);
  progressBar.style.width = `${progress * 100}%`;
}

window.addEventListener("scroll", updateScrollState, { passive: true });
window.addEventListener("resize", updateScrollState);
updateScrollState();

menuToggle?.addEventListener("click", () => {
  const willOpen = menuToggle.getAttribute("aria-expanded") !== "true";
  menuToggle.setAttribute("aria-expanded", String(willOpen));
  siteNav.classList.toggle("is-open", willOpen);
  header.classList.toggle("is-menu-open", willOpen);
  setBodyLock(willOpen);
});

siteNav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menuToggle?.setAttribute("aria-expanded", "false");
    siteNav.classList.remove("is-open");
    header.classList.remove("is-menu-open");
    setBodyLock(false);
  });
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 1100) {
    menuToggle?.setAttribute("aria-expanded", "false");
    siteNav?.classList.remove("is-open");
    header.classList.remove("is-menu-open");
  if (!projectDialog.open) {
      setBodyLock(false);
    }
  }
});

const revealElements = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: "0px 0px -5% 0px" }
  );

  revealElements.forEach((element) => revealObserver.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("is-visible"));
}

const filters = document.querySelectorAll(".filter");
const projectCards = document.querySelectorAll(".project-card, .archive-card");
const workCount = document.querySelector(".work-count b");

filters.forEach((filter) => {
  filter.addEventListener("click", () => {
    const category = filter.dataset.filter;
    let visibleCount = 0;

    filters.forEach((item) => item.classList.remove("is-active"));
    filter.classList.add("is-active");

    projectCards.forEach((card) => {
      const shouldShow =
        category === "all" || card.dataset.category === category;
      card.classList.toggle("is-hidden", !shouldShow);
      if (shouldShow) visibleCount += 1;
    });

    workCount.textContent = String(visibleCount).padStart(2, "0");
  });
});

function openDialog(dialog) {
  if (!dialog) return;
  lastFocusedElement = document.activeElement;
  dialog.showModal();
  setBodyLock(true);
}

function closeDialog(dialog) {
  if (!dialog?.open) return;
  dialog.close();
}

document.querySelectorAll("[data-close-dialog]").forEach((button) => {
  button.addEventListener("click", () => {
    closeDialog(button.closest("dialog"));
  });
});

[projectDialog].forEach((dialog) => {
  dialog?.addEventListener("click", (event) => {
    if (event.target === dialog) closeDialog(dialog);
  });
  dialog?.addEventListener("close", () => {
    setBodyLock(false);
    dialog.querySelector("video")?.pause();
    lastFocusedElement?.focus?.();
  });
});

document.querySelectorAll("[data-project]").forEach((button) => {
  button.addEventListener("click", () => {
    const project = projects[button.dataset.project];
    if (!project) return;

    document.querySelector("#dialog-kicker").textContent = project.kicker;
    document.querySelector("#project-dialog-title").textContent = project.title;
    document.querySelector("#dialog-role").textContent = project.role;
    document.querySelector("#dialog-lede").textContent = project.lede;
    document.querySelector("#dialog-goal").textContent = project.goal;
    document.querySelector("#dialog-idea").textContent = project.idea;
    document.querySelector("#dialog-output").textContent = project.output;
    document.querySelector("#dialog-result").textContent = project.result;

    const video = document.querySelector("#dialog-video");
    const source = document.querySelector("#dialog-video-source");
    video.pause();
    video.poster = project.poster;
    video.setAttribute("aria-label", `${project.title}作品视频`);
    source.src = project.video;
    video.load();
    document.querySelector("#dialog-caption").textContent = project.caption;

    openDialog(projectDialog);
  });
});

document.querySelectorAll('a[href="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    showToast("这里是占位链接，上线前请替换为你的主页地址。");
  });
});

document.querySelector("#current-year").textContent = String(new Date().getFullYear());

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
if (reduceMotion.matches) {
  heroVideo?.pause();
  caseStudyVideo?.pause();
}
