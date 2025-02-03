import { error } from '@sveltejs/kit'

export async function load({ params }) {

  try {
    const { slug } = params;

    const lessons = import.meta.glob('/src/deliverables/*.svx', { eager: true });
  
    const path = `/src/deliverables/${slug}.svx`;
    const lesson = lessons[path];
  
    if (!lesson) {
      throw error(404, `Could not find lesson for slug "${slug}"`);
    }
  
    return {
      //@ts-expect-error does not exist on type ...
      content: lesson.default,
      //@ts-expect-error does not exist on type ...
      meta: lesson.metadata,
      //@ts-expect-error does not exist on type ...
      title: lesson.metadata.title,
      // todo make a type for the shape of the modules getting imported
    };
    
  } catch (e) {
    throw error(404, `Could not find ${params.slug}`)
  }
}
