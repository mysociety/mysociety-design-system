# mySociety Design System

🚧 Beware – very early alpha 🚧

A library of styles and components for use in mySociety products, based on best practices from existing libraries like the GOV.UK Frontend and Bootstrap 4.

## Goals

* **Reduce maintenance burden for our products** through repeatable, dependable, shared code.
* **Enable faster prototyping or feature implementation** by being easy for a designer or front-end developer to understand and use in an afternoon.
* **Improve the** (already quite good, but not perfect) **accessibility of our products.**
* **Contribute to a common “mySociety” look and feel.**

## Design principles

* **Should work alongside a site’s existing styles.** We simply aren’t going to re-write the styles for all of our products from scratch to use this design system. Instead, write styles and components in such a way that they can be adopted piecemeal, as we work on new features / pages for our products. Bear in mind that this might mean _overriding_ styles set globally by the parent product.
* **Strictly opt-in.** This means making sure styles only apply to elements with a `.my-*` class of some kind.
* **Sensible defaults.** Default styles should conform to [WCAG 2.1 Level AA](https://www.w3.org/TR/WCAG21/) and support the browsers listed below. GOV.UK has some guidance on [Understanding WCAG 2.1](https://www.gov.uk/service-manual/helping-people-to-use-your-service/understanding-wcag).
* **If you think people might want to change it, make it a Sass variable.**

## Browser support

Browser support policy is based on the standard set by [GOV.UK Frontend](https://github.com/alphagov/govuk-frontend/blob/master/README.md#browser-support).

| Operating system | Browser                                | Support       |
|----------------- |----------------------------------------|---------------|
| Windows          | Internet Explorer 8-10                 | functional    |
| Windows          | Internet Explorer 11                   | compliant     |
| Windows          | Edge (latest 2 versions)               | compliant     |
| Windows          | Google Chrome (latest 2 versions)      | compliant     |
| Windows          | Mozilla Firefox (latest 2 versions)    | compliant     |
| macOS            | Safari 9+                              | compliant     |
| macOS            | Google Chrome (latest 2 versions)      | compliant     |
| macOS            | Mozilla Firefox (latest 2 versions)    | compliant     |
| iOS              | Safari for iOS 9.3+                    | compliant     |
| iOS              | Google Chrome (latest 2 versions)      | compliant     |
| Android          | Google Chrome (latest 2 versions)      | compliant     |
| Android          | Samsung Internet (latest 2 versions)   | compliant     |
|                  | Anything else                          | no guarantees |

‘Compliant’ means that the components must look as good and function as well as they do in other modern browsers.

'Functional' means the components may not look perfect in the given browser, but must still be usable without errors and without 'looking broken'.

## Try the demo

Run `make demo` to compile the `demo/demo.css` file. Then open `demo/index.html` in your web browser, or run a temporary web server in the `demo/` directory.
