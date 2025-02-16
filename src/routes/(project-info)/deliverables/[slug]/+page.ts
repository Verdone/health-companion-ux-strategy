//@ts-nocheck
import { error } from '@sveltejs/kit';

export async function load({ params }) {
  try {
    const { slug } = params;

    const lessons = import.meta.glob('/src/deliverables/*.svx', { eager: true });

    // Convert to an array and sort by numerical order
    const lessonEntries = Object.entries(lessons)
      .map(([path, module]) => ({
        path,
        slug: path.split('/').pop().replace('.svx', ''), // Extract slug
        content: module.default,
        meta: module.metadata,
      }))
      .sort((a, b) => a.slug.localeCompare(b.slug, undefined, { numeric: true })); // Sort by number

    // Find the index of the current lesson
    const index = lessonEntries.findIndex((lesson) => lesson.slug === slug);

    if (index === -1) {
      throw error(404, `Could not find lesson for slug "${slug}"`);
    }

    return {
      content: lessonEntries[index].content,
      meta: lessonEntries[index].meta,
      title: lessonEntries[index].meta.title,
      prev: index > 0 ? lessonEntries[index - 1].slug : null, // Previous lesson
      next: index < lessonEntries.length - 1 ? lessonEntries[index + 1].slug : null, // Next lesson
    };
  } catch (e) {
    throw error(404, `Could not find ${params.slug}`);
  }
}


// import { error } from '@sveltejs/kit'

// export async function load({ params }) {

//   try {
//     const { slug } = params;

//     const lessons = import.meta.glob('/src/deliverables/*.svx', { eager: true });
  
//     const path = `/src/deliverables/${slug}.svx`;
//     const lesson = lessons[path];
  
//     if (!lesson) {
//       throw error(404, `Could not find lesson for slug "${slug}"`);
//     }
  
//     return {
//       //@ts-expect-error does not exist on type ...
//       content: lesson.default,
//       //@ts-expect-error does not exist on type ...
//       meta: lesson.metadata,
//       //@ts-expect-error does not exist on type ...
//       title: lesson.metadata.title,
//       // todo make a type for the shape of the modules getting imported
//     };
    
//   } catch (e) {
//     throw error(404, `Could not find ${params.slug}`)
//   }
// }
