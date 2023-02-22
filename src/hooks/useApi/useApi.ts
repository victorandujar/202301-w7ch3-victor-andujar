import { useCallback } from "react";
import {
  createRobotActionCreator,
  deleteRobotActionCreator,
  loadRobotsActionCreator,
} from "../../store/features/robotsSlice/robotsSlice";

import { useAppDispatch } from "../../store/hooks";
import { RobotStructure } from "../../types/types";

const apiUrl = process.env.REACT_APP_URL_API;
const path = "robots";
const deleteRobot = "/delete/";

const addRobot = "/create/";

const useApi = () => {
  const dispatch = useAppDispatch();

  const getRobots = useCallback(async () => {
    try {
      const response = await fetch(`${apiUrl!}${path}`);
      const robots = await response.json();

      if (!response.ok) {
        return;
      }

      dispatch(loadRobotsActionCreator(robots.robots));
    } catch (error) {
      return (error as Error).message;
    }
  }, [dispatch]);

  const deleteRobots = useCallback(
    async (robot: RobotStructure) => {
      try {
        const response = await fetch(
          `${apiUrl}${path}${deleteRobot}${robot.id}`,
          {
            method: "DELETE",
          }
        );

        if (!response.ok) {
          return;
        }

        dispatch(deleteRobotActionCreator(robot));
      } catch (error) {
        return (error as Error).message;
      }
    },
    [dispatch]
  );

  const createRobot = useCallback(
    async (robot: RobotStructure) => {
      const response = await fetch(`${apiUrl}${path}${addRobot}`, {
        method: "POST",
        body: JSON.stringify({
          name: robot.name,
          url: robot.url,
          stats: {
            speed: robot.stats.speed,
            endurance: robot.stats.endurance,
            creationDate: robot.stats.creationDate,
          },
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });

      if (!response.ok) {
        return;
      }

      dispatch(createRobotActionCreator(robot));
    },
    [dispatch]
  );

  return { getRobots, deleteRobots, createRobot };
};

export default useApi;
