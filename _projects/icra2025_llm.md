---
layout: page
title: LLM-Guided Aerial Navigation
description: Toward Embedded LLM-Guided Navigation and Object Detection for Aerial Robots
img: assets/img/publication_preview/LLM_drone_graphic_abstract.jpg
importance: 2
category: Research
---

**Toward Embedded LLM-Guided Navigation and Object Detection for Aerial Robots**

*Richie R. Suganda★, Bin Hu*

🎥 [Video](https://www.youtube.com/watch?v=uHh0LyTN1c0)

**IEEE International Conference on Robotics and Automation (ICRA) 2025 — Late Breaking Session**

---

## Overview

A **hierarchical framework** integrating natural language commands with autonomous quadrotor navigation. Our system uses a fine-tuned LLaMA model (via LoRA) to interpret high-level natural language instructions into structured task goals, which are then executed by a ModalAI Seeker drone through onboard VIO-based control, path planning, and real-time object detection.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/publication_preview/LLM_drone_graphic_abstract.jpg" title="LLM-Guided Aerial Robot Architecture" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    System architecture: Natural language commands are processed by a LoRA-tuned LLM to generate task specifications, which are then executed by the drone's onboard autonomy stack.
</div>

## Key Contributions

- **LLM-to-Robot Pipeline**: End-to-end framework from natural language instructions to physical robot execution
- **Efficient Fine-Tuning**: LoRA-based adaptation of LLaMA for robotics-specific instruction following
- **Hardware-in-the-Loop**: Real-world testing on ModalAI Seeker drone with onboard compute
- **Integrated Perception**: Simultaneous VIO-based localization, path planning, and object detection

## BibTeX

```bibtex
@inproceedings{suganda2025llm,
  title={Toward Embedded LLM-Guided Navigation and Object Detection for Aerial Robots},
  author={Suganda, Richie R. and Hu, Bin},
  booktitle={2025 IEEE International Conference on Robotics and Automation (ICRA) -- Late Breaking Session},
  year={2025},
  address={Atlanta, USA}
}
```
