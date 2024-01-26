# Weather application

This application is built using data from SMHI.

## Getting Started

### Requirements

Node 18

### Running the application

Create a file named `.env.local` in the root directory and copy the contents from `.env.example` into it.

Install dependencies:

```bash
npm run i
```

Run the development server:

```bash
npm run dev
```

## Accessibility

This application has some followed some accessibility best practices. A few examples:

- Use of semantic HTML elements, such as select rather than buttons and div containers. Or table to display data rather than div containers.
- The language selector is wrapped around an icon, which would be troublesome for people with screen readers because it would be hard to understand where the link takes the user. Added labels to counter this issue.
- Colors have been tested for contrast at: https://webaim.org/resources/contrastchecker/
- Some table headings were hard to fit in mobile mode and because of this two labels have been implemented, one displayed on desktop and the other displayed on mobile. These have been hidden from screen readers, because not displaying them still makes them targetable by screen readers and having two labels does not make any sense. A third, more descriptive text has been added specifically for screen readers instead.
