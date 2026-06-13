# Portfolio CSS Structure

This file classifies `portfolio.css` using the existing comment sections so you can split it into smaller files.

## Sections and Recommended Partial Files

1. `base.css`
   - Lines 1-42
   - Includes global reset, CSS variables, `html`, `body` base styles.
   - Covers the root design system used by all sections.

2. `background.css`
   - Lines 43-54
   - `/* NEURAL GRID BACKGROUND */`
   - Contains only `#neural-canvas` styling.

3. `sidebar.css`
   - Lines 55-146
   - `/* SIDEBAR */`
   - Includes `.sidebar`, `.sidebar-logo`, `.sidebar-nav`, nav items, footer.

4. `layout.css`
   - Lines 147-165
   - `/* MAIN */`, `/* SECTIONS */`
   - Contains `.main`, `.section`, `.section+.section`.

5. `hero.css`
   - Lines 166-290
   - `/* HERO */`
   - Includes hero text, eyebrow, buttons, stats.

6. `section-headers.css`
   - Lines 291-329
   - `/* SECTION HEADERS */`
   - Contains `.sec-header`, `.sec-eyebrow`, `.sec-title`, `.sec-desc`.

7. `about.css`
   - Lines 330-401
   - `/* ABOUT */`
   - Includes `.about-grid`, `.about-bio`, sidebar card, profile placeholder, info rows.

8. `timeline.css`
   - Lines 402-467
   - `/* TIMELINE */`
   - Contains `.timeline`, `.tl-item`, timeline markers and labels.

9. `skills.css`
   - Lines 468-541
   - `/* SKILLS */`
   - Includes skill grid, category cards, bars, tags.

10. `projects.css`
    - Lines 542-646
    - `/* PROJECTS */`
    - Contains project cards, image block, tags, links.

11. `experience.css`
    - Lines 647-695
    - `/* EXPERIENCE */`
    - Includes experience grid and cards.

12. `education.css`
    - Lines 696-759
    - `/* EDUCATION */`
    - Contains education cards, degree/school styling, courses.

13. `certifications.css`
    - Lines 760-831
    - `/* CERTIFICATIONS */`
    - Includes certification cards and stats.

14. `books.css`
    - Lines 832-885
    - `/* BOOKS */`
    - Contains book cards, covers, info, stars.

15. `hobbies.css`
    - Lines 886-961
    - `/* HOBBIES */`
    - Includes hobby cards and descriptions.

16. `achievements.css`
    - Lines 962-1003
    - `/* ACHIEVEMENTS */`
    - Contains achievement cards.

17. `blog.css`
    - Lines 1004-1056
    - `/* BLOG */`
    - Includes blog cards and metadata.

18. `contact.css`
    - Lines 1057-1187
    - `/* CONTACT */`
    - Contains contact grid, forms, fields, info blocks, status badge.

19. `utilities.css`
    - Lines 1188-1298
    - `/* SCROLLBAR */`, `/* MOBILE */`, `/* REVEAL ANIMATION */`
    - Includes scrollbar styling, mobile responsive rules, mobile toggle, sidebar overlay, reveal animation.

## Suggested Separation Strategy

- Keep `base.css` loaded first, since it defines variables and foundational styles.
- Group section-specific styles into separate files named after the section comment.
- Keep `utilities.css` for cross-cutting helpers and responsive rules.

## Optional import approach

If you want to keep a single entrypoint file, create `portfolio.css` as a manifest that imports the separated files:

```css
@import "base.css";
@import "background.css";
@import "sidebar.css";
@import "layout.css";
@import "hero.css";
@import "section-headers.css";
@import "about.css";
@import "timeline.css";
@import "skills.css";
@import "projects.css";
@import "experience.css";
@import "education.css";
@import "certifications.css";
@import "books.css";
@import "hobbies.css";
@import "achievements.css";
@import "blog.css";
@import "contact.css";
@import "utilities.css";
```

> Note: `@import` is fine for development, but if you want faster loading in production, use a build step or combine the files after splitting.

## Recommended next step

You can now move each block from `portfolio.css` into the corresponding partial file above. If you want, I can also create the partial files for you next.
