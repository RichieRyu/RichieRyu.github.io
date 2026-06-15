---
layout: page
title: Perception-Aware Leader-Follower Control
description: Distributed Perception Aware Safe Leader Follower System via Control Barrier Methods
img: assets/img/publication_preview/cbf.gif
importance: 1
category: Research
---

**Distributed Perception Aware Safe Leader Follower System via Control Barrier Methods**

*Richie R. Suganda★, Tony Tran♦, Miao Pan, Lei Fan, Qin Lin, Bin Hu*

📄 [PDF](https://arxiv.org/pdf/2011.13980.pdf) &nbsp;|&nbsp; 🌐 [Project Page](https://nail-uh.github.io/icra25.github.io/) &nbsp;|&nbsp; 🎥 [Video](https://www.youtube.com/watch?v=-6Rd6V3HaoI)

**IEEE International Conference on Robotics and Automation (ICRA) 2025** — Acceptance Rate: 38.67%

---

## Overview

This work introduces a **distributed perception-aware safe leader-follower formation control framework** using Control Barrier Functions (CBFs). The key challenge in leader-follower systems is maintaining visual contact between robots while executing formation maneuvers. Our approach guarantees that the leader remains within the follower's field of view (FOV) by incorporating perception constraints directly into the control design via CBFs.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/publication_preview/cbf.gif" title="CBF-based Leader Follower Control" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Two ROSbot Pro 2 robots demonstrate perception-aware leader-follower control using Control Barrier Functions (CBFs) to maintain visual contact.
</div>

## Key Contributions

- **Perception-Aware CBFs**: Novel CBF formulation that encodes field-of-view constraints directly into the control barrier framework
- **Distributed Architecture**: Each robot computes local control inputs using only onboard sensing and neighbor information
- **Hardware Validation**: Real-world experiments on ROSbot Pro 2 platforms demonstrating robust visual contact maintenance
- **Safety Guarantees**: Formal proof that the proposed CBFs guarantee forward invariance of the safe set

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/publication_preview/cbf_full.gif" title="Full experiment" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Experimental validation: Our CBF-based approach reliably keeps the leader within the follower's field of view, while conventional formation control without CBFs often loses visual contact, leading to unsafe behavior.
</div>

## BibTeX

```bibtex
@inproceedings{suganda2025distributed,
  title={Distributed Perception Aware Safe Leader Follower System via Control Barrier Methods},
  author={Suganda, Richie R. and Tran, Tony and Pan, Miao and Fan, Lei and Lin, Qin and Hu, Bin},
  booktitle={2025 IEEE International Conference on Robotics and Automation (ICRA)},
  pages={7794--7800},
  year={2025},
  organization={IEEE}
}
```
