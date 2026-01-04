import NextLink from "next/link";

type BaseLinkProps = {
  label: string;
  target: "_self" | "_blank";
  className: string;
};

type ExternalLinkProps = BaseLinkProps & {
  type: "external";
  externalUrl: string;
};

type InternalLink = BaseLinkProps & {
  type: "internal";
  page: string;
};

export type LinkProps = ExternalLinkProps | InternalLink;

export function Link(props: LinkProps) {
  if (props.type === "external") {
    const { externalUrl, label, target, className } = props;
    return (
      <a
        className={className}
        href={externalUrl}
        target={target}
        rel="noopener noreferrer"
      >
        {label}
      </a>
    );
  }

  const { page, label, target, className } = props;
  return (
    <NextLink className={className} href={page} target={target}>
      {label}
    </NextLink>
  );
}
