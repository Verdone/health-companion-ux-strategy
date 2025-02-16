import type { ColumnDef } from "@tanstack/table-core";
import { createRawSnippet } from "svelte";
import { renderComponent, renderSnippet } from "$lib/components/ui/data-table/index.js";
import type { Reminder } from "./schema";
import DataTableActions from "../(components)/data-table-actions.svelte";
import { Checkbox } from "$lib/components/ui/checkbox";
import DataTableTaskButton from "../(components)/data-table-task-button.svelte";
 
export const columns: ColumnDef<Reminder>[] = [
  {
    id: "select",
    header: ({ table }) =>
      renderComponent(Checkbox, {
        checked: table.getIsAllPageRowsSelected(),
        indeterminate:
          table.getIsSomePageRowsSelected() &&
          !table.getIsAllPageRowsSelected(),
        onCheckedChange: (value) => table.toggleAllPageRowsSelected(!!value),
        "aria-label": "Select all",
      }),
    cell: ({ row }) =>
      renderComponent(Checkbox, {
        checked: row.getIsSelected(),
        onCheckedChange: (value) => row.toggleSelected(!!value),
        "aria-label": "Select row",
      }),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const statusSnippet = createRawSnippet<[string]>((getStatus) => {
        const status = getStatus();
        return {
          render: () => `<div class="capitalize">${status}</div>`
        };
      });
      return renderSnippet(statusSnippet, row.getValue("status"));
    }
  },
  {
    accessorKey: "task",
    header: ({ column }) =>
      renderComponent(DataTableTaskButton, {
        onclick: () => column.toggleSorting(column.getIsSorted() === "asc"),
      }),
  },
  {
  accessorKey: "date",
  header: () => {
    const dueDateHeaderSnippet = createRawSnippet(() => ({
    render: () => `<div class="text-right">Due Date</div>`,
    }));
    return renderSnippet(dueDateHeaderSnippet, "");
  },
  cell: ({ row }) => {
    const formatter = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric"
    });

    const dueDateCellSnippet = createRawSnippet<[string]>((getdueDate) => {
    const dueDate = getdueDate();
    return {
      render: () => `<div class="text-right font-medium">${dueDate}</div>`,
    };
    });

    return renderSnippet(
    dueDateCellSnippet,
    formatter.format(row.getValue("date"))
    );
  },
  },
  {
    accessorKey: "remind_me",
    header: () => {
      const remindMeHeaderSnippet = createRawSnippet(() => ({
      render: () => `<div class="text-right">Notify me</div>`,
      }));
      return renderSnippet(remindMeHeaderSnippet, "");
    },
    cell: ({ row }) => {
      const remindMeSnippet = createRawSnippet<[string]>((getRemindMe) => {
        const remindMe = getRemindMe();
        return {
          render: () => `<div class="capitalize text-right font-medium">${remindMe}</div>`
        };
      });
      return renderSnippet(remindMeSnippet, row.getValue("remind_me"));
    }
  },
  {
  id: "actions",
    cell: ({ row }) => {
      // You can pass whatever you need from `row.original` to the component
      return renderComponent(DataTableActions, { id: row.original.id });
    },
  },
];