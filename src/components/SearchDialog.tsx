"use client";

import type { ComponentProps } from "react";
import { useDocsSearch } from "fumadocs-core/search/client";
import {
  SearchDialog,
  SearchDialogContent,
  SearchDialogHeader,
  SearchDialogInput,
  SearchDialogList,
  SearchDialogListItem,
  SearchDialogOverlay,
  SearchDialogIcon,
  SearchDialogClose,
} from "fumadocs-ui/components/dialog/search";
import type { SharedProps } from "fumadocs-ui/components/dialog/search";

const Item = (props: ComponentProps<typeof SearchDialogListItem>) => (
  <SearchDialogListItem {...props} className="cursor-pointer" />
);

export default function CustomSearchDialog(props: SharedProps) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const { search, setSearch, query } = useDocsSearch({
    type: "static",
    from: `${basePath}/api/search`,
  });

  return (
    <SearchDialog
      search={search}
      onSearchChange={setSearch}
      isLoading={query.isLoading}
      {...props}
    >
      <SearchDialogOverlay />
      <SearchDialogContent>
        <SearchDialogHeader>
          <SearchDialogIcon />
          <SearchDialogInput />
          <SearchDialogClose />
        </SearchDialogHeader>
        <SearchDialogList items={query.data !== "empty" ? query.data : null} Item={Item} />
      </SearchDialogContent>
    </SearchDialog>
  );
}
