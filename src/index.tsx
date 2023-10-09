import { Action, ActionPanel, List } from "@raycast/api";
import { ReactElement, useState } from "react";
import { URL } from "url";

export default function UserSearchRoot(): ReactElement {
  const [search, setSearch] = useState<string>();
  return (
    <List searchText={search} onSearchTextChange={setSearch} searchBarPlaceholder="Search the Astro Documentation">
      <ListItemSearch search={search} />
    </List>
  );
}

function ListItemSearch(props: { search: string | undefined }): ReactElement | null {
  const s = props.search;
  if (!s || s.length <= 0) {
    return (
      <List.Item
        title={`Open the Astro Documentation`}
        icon="astro-search-icon.png"
        actions={
          <ActionPanel>
            <Action.OpenInBrowser
              title="Open the Astro Documentation"
              icon="astro-search-icon.png"
              url="https://docs.astro.build/"
            />
          </ActionPanel>
        }
      />
    );
  }
  return (
    <List.Item
      title={`Search '${s}' in the Astro Documentation`}
      icon="astro-search-icon.png"
      actions={
        <ActionPanel>
          <OpenSearchInBrowserAction search={s} />
        </ActionPanel>
      }
    />
  );
}

function OpenSearchInBrowserAction(props: { search: string }): ReactElement {
  const url = new URL(`https://a.stro.cc/${props.search}`);
  return <Action.OpenInBrowser title="Search on Astro Documentation" icon="astro-search-icon.png" url={url.href} />;
}
