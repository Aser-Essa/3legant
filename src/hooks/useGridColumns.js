import useContainerAndWindowWidth from "./useContainerAndWindowWidth";

function useGridColumns({ type }) {
  const { ref, containerWidth, width, gridType } = useContainerAndWindowWidth();

  const grid34 =
    type == "blog"
      ? width > 980
        ? containerWidth / gridType - gridType * 6
        : 262
      : width > 980
        ? 250
        : 480;

  const grid12 =
    type == "blog"
      ? width > 680
        ? width > 1100
          ? containerWidth / gridType - gridType * 7
          : containerWidth / gridType + gridType * 6
        : gridType == 2
          ? 108
          : 226
      : width > 1100
        ? containerWidth / gridType - gridType * 7
        : gridType == 2
          ? width > 636
            ? 600
            : 120
          : 300;

  return { ref, containerWidth, width, gridType, grid34, grid12 };
}

export default useGridColumns;
