import NextLink from "next/link";

type BaseLinkProps = {
  label: string;
};

type ExternalLinkProps = BaseLinkProps & {
  type: "external" | "free-call";
  url: string;
} & Omit<React.ComponentProps<"a">, "href" | "target" | "rel" | "children">;

type InternalLink = BaseLinkProps & {
  type: "internal";
  href: string;
} & Omit<
    React.ComponentProps<typeof NextLink>,
    "href" | "target" | "rel" | "children"
  >;

export type LinkProps = ExternalLinkProps | InternalLink;

const calFreeMeetingUrl = "https://cal.eu/italivointernational/free-intro-call";

export function Link(props: LinkProps) {
  if (props.type === "internal") {
    const { label, href, ...rest } = props;
    return (
      <NextLink href={href} {...rest}>
        {label}
      </NextLink>
    );
  }

  const { type, label, url, ...rest } = props;
  const href = type === "external" ? url : calFreeMeetingUrl;

  return (
    <a href={href} {...rest} rel="noopener noreferrer" target="_blank">
      {label}
    </a>
  );
}
