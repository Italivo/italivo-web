import NextLink from "next/link";

type BaseLinkProps = {
  label: string;
};

type ExternalLinkProps = BaseLinkProps & {
  type: "external";
  externalUrl: string;
} & Omit<React.ComponentProps<"a">, "href" | "rel" | "aria-label">;

type InternalLink = BaseLinkProps & {
  type: "internal";
  page: string;
} & Omit<React.ComponentProps<typeof NextLink>, "href" | "aria-label">;

export type LinkProps = ExternalLinkProps | InternalLink;

export function Link(props: LinkProps) {
  if (props.type === "external") {
    const { externalUrl, label, children, ...externalLinkProps } = props;
    return (
      <a
        href={externalUrl}
        {...externalLinkProps}
        rel="noopener noreferrer"
        aria-label={children ? label : undefined}
      >
        {children ?? label}
      </a>
    );
  }

  const { page, label, children, ...internalLinkProps } = props;
  return (
    <NextLink
      href={page}
      {...internalLinkProps}
      aria-label={children ? label : undefined}
    >
      {children ?? label}
    </NextLink>
  );
}
