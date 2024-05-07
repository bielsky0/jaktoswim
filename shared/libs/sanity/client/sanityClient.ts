import { createClient, groq } from "next-sanity";
import { config } from "@/shared/libs/sanity/config";
import {
  BlogPage,
  PageType,
  Blog,
  GalleryPage,
} from "@/shared/libs/sanity/types";

export async function getPage(page: string): Promise<PageType | null> {
  const client = createClient(config);

  return client.fetch(
    groq`*[_type == "page" && title == $page][0] {
    _id,
    keywords,
    pageBuilder[] {
      _type == "faqs" => {
        _type,
        title,
        button_cta,
        faqs
      },
      _type == "featuredReviews" => {
        _type,
        subtitle,
        title,
        button_cta,
        "featuredReviews": featuredReviews[]-> {
          content,
          author
        }
      },
      _type == "billboard" => {
        _type,
        subtitle,
        button_cta,
        showreel,
        second_showreel
      },
      _type == "videoHero" => {
        _type,
        title,
        subtitle,
        button_cta,
        description,
        coverVideo
      },
      _type == "imageHero" => {
        _type,
        title,
        subtitle,
        button_cta,
        description,
        coverImage
      },
      _type == "hero" => {
        _type,
        title,
        subtitle,
        button_cta,
        description
      },
      _type == "services" => {
        _type,
        title,
        subtitle,
        button_cta,
        description,
        coverVideo,
        "services": services[] {
          _type,
          title,
          description,
          coverIamge
        }
      },
      _type == "contact" => {
        _type,
        title,
        subtitle,
        coverIamge,
        contact {
          title,
          description,
          phoneNumber
        }
      },
      _type == "imageCarousel" => {
        _type,
        title,
        button_cta,
        images
      },
      _type == "marquee" => {
        _type,
        content
      },
      _type == "featuredBlogs" => {
        _type,
        title,
        subtitle,
        button_cta,
        "featuredBlogs": featuredBlogs[]-> {
          content,
          title,
          slug,
          description,
          keywords,
          coverImage
        }
      }
    }
  }`,
    { page }
  );
}

export async function getBlogs(): Promise<BlogPage> {
  const client = createClient(config);

  return client.fetch(groq`{
    "blogs": *[_type == "blog"] {
      _id,
      title,
      slug,
      description,
      keywords,
      content,
      coverImage,
      "featuredBlogs": featuredBlogs[]-> {
        _id,
        title,
        slug,
        description,
        coverImage
      }
    },
    "blogPage": *[_type == "page" && title == "Blog"][0] {
      _id,
      keywords,
      pageBuilder[] {
        _type == "faqs" => {
          _type,
          title,
          button_cta,
          faqs
        },
        _type == "featuredReviews" => {
          _type,
          subtitle,
          title,
          button_cta,
          "featuredReviews": featuredReviews[]-> {
            content,
            author
          }
        },
        _type == "billboard" => {
          _type,
          subtitle,
          button_cta,
          showreel,
          second_showreel
        },
        _type == "videoHero" => {
          _type,
          title,
          subtitle,
          button_cta,
          description,
          coverVideo
        },
        _type == "imageHero" => {
          _type,
          title,
          subtitle,
          button_cta,
          description,
          coverImage
        },
        _type == "hero" => {
          _type,
          title,
          subtitle,
          button_cta,
          description
        },
        _type == "services" => {
          _type,
          title,
          subtitle,
          button_cta,
          description,
          coverVideo,
          "services": services[] {
            _type,
            title,
            description,
            coverIamge
          }
        },
        _type == "contact" => {
          _type,
          title,
          subtitle,
          coverIamge,
          contact {
            title,
            description,
            phoneNumber
          }
        },
        _type == "imageCarousel" => {
          _type,
          title,
          button_cta,
          images
        },
        _type == "marquee" => {
          _type,
          content
        },
        _type == "featuredBlogs" => {
          _id,
          title,
          slug,
          description,
          keywords,
          content,
          coverImage,
          "featuredBlogs": featuredBlogs[]-> {
          _id,
          title,
          slug,
          description,
          keywords,
          content,
          coverImage,
          }
        }
      }
    }
  }`);
}

export async function getBlog(slug: string): Promise<Blog | null> {
  const client = createClient(config);

  return client.fetch(
    groq`*[_type == "blog" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    description,
    keywords,
    content,
    coverImage,
    _createdAt,
    "featuredBlogs": featuredBlogs[]-> {
      _id,
      title,
      slug,
      description,
      keywords,
      content,
      coverImage,
    }
  }`,
    { slug }
  );
}

export async function getGalleries(): Promise<GalleryPage> {
  const client = createClient(config);

  return client.fetch(groq`{
    "images": *[_type == "galleryImage"] {
      _id,
      title,
      coverImage,
    },
    "galleryPage": *[_type == "page" && title == "Gallery"][0] {
      _id,
      keywords,
      pageBuilder[] {
        _type == "faqs" => {
          _type,
          title,
          button_cta,
          faqs
        },
        _type == "featuredReviews" => {
          _type,
          subtitle,
          title,
          button_cta,
          "featuredReviews": featuredReviews[]-> {
            content,
            author
          }
        },
        _type == "billboard" => {
          _type,
          subtitle,
          button_cta,
          showreel,
          second_showreel
        },
        _type == "videoHero" => {
          _type,
          title,
          subtitle,
          button_cta,
          description,
          coverVideo
        },
        _type == "imageHero" => {
          _type,
          title,
          subtitle,
          button_cta,
          description,
          coverImage
        },
        _type == "hero" => {
          _type,
          title,
          subtitle,
          button_cta,
          description
        },
        _type == "services" => {
          _type,
          title,
          subtitle,
          button_cta,
          description,
          coverVideo,
          "services": services[] {
            _type,
            title,
            description,
            coverIamge
          }
        },
        _type == "contact" => {
          _type,
          title,
          subtitle,
          coverIamge,
          contact {
            title,
            description,
            phoneNumber
          }
        },
        _type == "imageCarousel" => {
          _type,
          title,
          button_cta,
          images
        },
        _type == "marquee" => {
          _type,
          content
        },
        _type == "featuredBlogs" => {
          _id,
          title,
          slug,
          description,
          keywords,
          content,
          coverImage,
          "featuredBlogs": featuredBlogs[]-> {
          _id,
          title,
          slug,
          description,
          keywords,
          content,
          coverImage,
          }
        }
      }
    }
  }`);
}
