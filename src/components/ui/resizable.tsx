"use client";

import * as React from "react";
import { GripVerticalIcon } from "lucide-react";
import { Group, Panel, Separator } from "react-resizable-panels";

import { cn } from "./utils";

type GroupImperativeHandle = {
  getLayout: () => { [panelId: string]: number };
  setLayout: (layout: { [panelId: string]: number }) => any;
};

const ResizablePanelGroup = React.forwardRef<
  GroupImperativeHandle,
  React.ComponentPropsWithoutRef<typeof Group>
>(({ className, ...props }, ref) => (
  <Group
    groupRef={ref}
    data-slot="resizable-panel-group"
    className={cn(
      "flex h-full w-full data-[panel-group-direction=vertical]:flex-col",
      className,
    )}
    {...props}
  />
));
ResizablePanelGroup.displayName = "ResizablePanelGroup";

const ResizablePanel = Panel;

const ResizableHandle = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof Separator> & {
    withHandle?: boolean;
  }
>(({ withHandle, className, ...props }, ref) => (
  <Separator
    elementRef={ref}
    data-slot="resizable-handle"
    className={cn(
      "bg-border focus-visible:ring-ring relative flex w-px items-center justify-center after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:ring-1 focus-visible:ring-offset-1 focus-visible:outline-hidden data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90",
      className,
    )}
    {...props}
  >
    {withHandle && (
      <div className="bg-border z-10 flex h-4 w-3 items-center justify-center rounded-xs border">
        <GripVerticalIcon className="size-2.5" />
      </div>
    )}
  </Separator>
));
ResizableHandle.displayName = "ResizableHandle";

export { ResizablePanelGroup, ResizablePanel, ResizableHandle };
