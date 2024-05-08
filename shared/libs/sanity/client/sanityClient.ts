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
        coverImage {
          _type,
          alt,
          asset -> {
            url,
            metadata
          }
        },
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
          coverIamge {
            _type,
            alt,
            asset -> {
              url,
              metadata
            }
          },
        }
      },
      _type == "contact" => {
        _type,
        title,
        subtitle,
        coverIamge {
          _type,
          alt,
          asset -> {
            url,
            metadata
          }
        },
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
        images[] {
          _type,
          alt,
          asset -> {
            url,
            metadata
          }
        },
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
          coverImage {
            _type,
            alt,
            asset -> {
              url,
              metadata
            }
          },
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
      coverImage {
        _type,
        alt,
        asset -> {
          url,
          metadata
        }
      },
      "featuredBlogs": featuredBlogs[]-> {
        _id,
        title,
        slug,
        description,
        coverImage {
          _type,
          alt,
          asset -> {
            url,
            metadata
          }
        },
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
          coverImage {
            _type,
            alt,
            asset -> {
              url,
              metadata
            }
          },
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
            coverIamge {
              _type,
              alt,
              asset -> {
                url,
                metadata
              }
            },
          }
        },
        _type == "contact" => {
          _type,
          title,
          subtitle,
          coverIamge {
            _type,
            alt,
            asset -> {
              url,
              metadata
            }
          },
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
          coverImage {
            _type,
            alt,
            asset -> {
              url,
              metadata
            }
          },
          "featuredBlogs": featuredBlogs[]-> {
          _id,
          title,
          slug,
          description,
          keywords,
          content,
          coverImage {
            _type,
            alt,
            asset -> {
              url,
              metadata
            }
          },
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
    coverImage {
      _type,
      alt,
      asset -> {
        url,
        metadata
      }
    },
    _createdAt,
    "featuredBlogs": featuredBlogs[]-> {
      _id,
      title,
      slug,
      description,
      keywords,
      content,
      coverImage {
        _type,
        alt,
        asset -> {
          url,
          metadata
        }
      },
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
      coverImage {
        _type,
        alt,
        asset -> {
          url,
          metadata
        }
      },
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
          coverImage {
            _type,
            alt,
            asset -> {
              url,
              metadata
            }
          },
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
            coverIamge {
              _type,
              alt,
              asset -> {
                url,
                metadata
              }
            },
          }
        },
        _type == "contact" => {
          _type,
          title,
          subtitle,
          coverIamge {
            _type,
            alt,
            asset -> {
              url,
              metadata
            }
          },
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
          coverImage {
            _type,
            alt,
            asset -> {
              url,
              metadata
            }
          },
          "featuredBlogs": featuredBlogs[]-> {
          _id,
          title,
          slug,
          description,
          keywords,
          content,
          coverImage {
            _type,
            alt,
            asset -> {
              url,
              metadata
            }
          },
          }
        }
      }
    }
  }`);
}

export async function getAllBlogs(): Promise<Omit<Blog, "featuredBlogs">[]> {
  const client = createClient(config);

  return client.fetch(groq`*[_type == "blog"] {
    _id,
    title,
    slug,
    description,
    keywords,
    content,
    coverImage {
      _type,
      alt,
      asset -> {
        url,
        metadata
      }
    },
    _createdAt
  }`);
}
